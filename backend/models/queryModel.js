const db = require("../config/db");

class Query {
  static async create({ request, response, type }) {
    if (type === "date") {
      // For date interpretations
      const dateValue = typeof response === "object" ? response.date : response;
      const responseJson =
        typeof response === "object" ? JSON.stringify(response) : null;

      const [result] = await db.execute(
        "INSERT INTO queries (input_text, interpreted_date, response_json, type) VALUES (?, ?, ?, ?)",
        [request, dateValue, responseJson, type]
      );
      return result;
    } else {
      // For product descriptions or other types
      const [result] = await db.execute(
        "INSERT INTO queries (input_text, response_json, type) VALUES (?, ?, ?)",
        [request, JSON.stringify(response), type]
      );
      return result;
    }
  }

  static async findAll() {
    const [rows] = await db.execute(
      "SELECT * FROM queries ORDER BY created_at DESC"
    );
    return rows;
  }
}

module.exports = Query;