const express = require("express");
const router = express.Router();

const {
  getAllCases,
  getCaseById,
  createCase,
  updateCase,
  deleteCase,
} = require("../controllers/caseController");

const validateCase = require("../middleware/validation");
const sanitizeInput = require("../middleware/sanitize");

// GET All Cases
router.get("/", getAllCases);

// GET Case By ID
router.get("/:id", getCaseById);

// POST Create Case
router.post("/", sanitizeInput, validateCase, createCase);

// PUT Update Case
router.put("/:id", sanitizeInput, validateCase, updateCase);

// DELETE Case
router.delete("/:id", deleteCase);

module.exports = router;