const express = require("express");
const router = express.Router();
const geminiController = require("../controllers/geminiController");

router.post("/interpret-date", geminiController.interpretDate);
router.get("/history", geminiController.getHistory);
router.post("/generate-product", geminiController.generateProductDescription);

module.exports = router;
