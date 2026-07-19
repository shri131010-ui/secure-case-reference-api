const validateCase = (req, res, next) => {
  const { reference, owner, status } = req.body;

  if (!reference || reference.trim() === "") {
    return res.status(400).json({
      success: false,
      message: "Reference is required",
    });
  }

  if (!owner || owner.trim() === "") {
    return res.status(400).json({
      success: false,
      message: "Owner is required",
    });
  }

  if (!status || status.trim() === "") {
    return res.status(400).json({
      success: false,
      message: "Status is required",
    });
  }

  next();
};

module.exports = validateCase;