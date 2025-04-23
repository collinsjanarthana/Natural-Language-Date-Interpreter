const { GoogleGenerativeAI } = require("@google/generative-ai");
const Query = require("../models/queryModel");

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

// Date Interpretation
exports.interpretDate = async (req, res) => {
  try {
    const { query } = req.body;
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const prompt = `Interpret this natural language date and return ONLY JSON with:
    - date: ISO format (YYYY-MM-DD)
    - request: original input
    
    Example: "next Tuesday" → {"date": "2025-03-19", "request": "next Tuesday"}
    Input: "${query}"`;

    const result = await model.generateContent(prompt);
    const response = processGeminiResponse(await result.response.text());

    //to save in db
    await saveToDatabase(query, response);
    res.json(response);
  } catch (error) {
    handleError(res, error, "date");
  }
};

// Product Description Generator
exports.generateProductDescription = async (req, res) => {
  try {
    const { query, format } = req.body;
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const prompt = `Create a ${format || "detailed"} product description for:
    "${query}"
    
    Return ONLY JSON with:
    - product_name
    - key_features: array
    - technical_specs: object
    - original_request`;

    const result = await model.generateContent(prompt);
    const response = processGeminiResponse(await result.response.text());

    await saveToDatabase(query, response);
    res.json(response);
  } catch (error) {
    handleError(res, error, "product");
  }
};

// extracts JSO from gemini's response
function processGeminiResponse(text) {
  const jsonStart = text.indexOf("{");
  const jsonEnd = text.lastIndexOf("}") + 1;
  return JSON.parse(text.substring(jsonStart, jsonEnd));
}

//save query and response
async function saveToDatabase(request, response) {
  await Query.create({
    request,
    response: response.date || null,
    type: response.date ? "date" : "product",
  });
}

//error handling
function handleError(res, error, type) {
  console.error(`Error processing ${type}:`, error);
  res.status(500).json({
    error: `Failed to process ${type} request`,
    details: error.message,
  });
}

// show all past histories
exports.getHistory = async (req, res) => {
  try {
    const history = await Query.findAll();
    res.json(history);
  } catch (error) {
    console.error("Error fetching history:", error);
    res.status(500).json({ error: "Failed to fetch history" });
  }
};
