const express = require("express");
const {
  summaryController,
  scifiImageController,
  paragraphController,
  jsconverterController,
  chatbotController,
} = require("../controllers/openaicontroller");
const router = express.Router();

router.post("/summary", summaryController);
router.post("/sci-fi", scifiImageController);
router.post("/paragraph", paragraphController);
router.post("/Jsconverter", jsconverterController);
router.post("/chatbot", chatbotController);

module.exports = router;
