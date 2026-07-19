const cases = require("../data/cases");

// ==========================
// GET All Cases
// ==========================
const getAllCases = (req, res) => {
  if (cases.length === 0) {
    return res.status(200).json({
      success: true,
      message: "No data found",
      data: [],
    });
  }

  res.status(200).json({
    success: true,
    message: "Cases fetched successfully",
    data: cases,
  });
};

// ==========================
// GET Case By ID
// ==========================
const getCaseById = (req, res) => {
  const id = parseInt(req.params.id);

  const foundCase = cases.find((item) => item.id === id);

  if (!foundCase) {
    return res.status(404).json({
      success: false,
      message: "Case not found",
    });
  }

  res.status(200).json({
    success: true,
    message: "Case fetched successfully",
    data: foundCase,
  });
};

// ==========================
// POST Create Case
// ==========================
const createCase = (req, res) => {
  const { reference, owner, status } = req.body;

  const newCase = {
    id: cases.length + 1,
    reference,
    owner,
    status,
  };

  cases.push(newCase);

  console.log(
    "[Analytics] User interacted with Secure Case Reference Lookup API"
  );

  res.status(201).json({
    success: true,
    message: "Case created successfully",
    data: newCase,
  });
};

// ==========================
// PUT Update Case
// ==========================
const updateCase = (req, res) => {
  const id = parseInt(req.params.id);

  const caseIndex = cases.findIndex((item) => item.id === id);

  if (caseIndex === -1) {
    return res.status(404).json({
      success: false,
      message: "Case not found",
    });
  }

  const { reference, owner, status } = req.body;

  cases[caseIndex] = {
    ...cases[caseIndex],
    reference,
    owner,
    status,
  };

  console.log(
    "[Analytics] User interacted with Secure Case Reference Lookup API"
  );

  res.status(200).json({
    success: true,
    message: "Case updated successfully",
    data: cases[caseIndex],
  });
};

// ==========================
// DELETE Case
// ==========================
const deleteCase = (req, res) => {
  const id = parseInt(req.params.id);

  const caseIndex = cases.findIndex((item) => item.id === id);

  if (caseIndex === -1) {
    return res.status(404).json({
      success: false,
      message: "Case not found",
    });
  }

  const deletedCase = cases.splice(caseIndex, 1);

  console.log(
    "[Analytics] User interacted with Secure Case Reference Lookup API"
  );

  res.status(200).json({
    success: true,
    message: "Case deleted successfully",
    data: deletedCase[0],
  });
};

module.exports = {
  getAllCases,
  getCaseById,
  createCase,
  updateCase,
  deleteCase,
};