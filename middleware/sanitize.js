const sanitizeHtml = require("sanitize-html");

const sanitizeInput = (req, res, next) => {
  const sanitizedBody = {};

  for (const key in req.body) {
    sanitizedBody[key] = sanitizeHtml(req.body[key], {
      allowedTags: [],
      allowedAttributes: {},
    });
  }

  req.body = sanitizedBody;

  next();
};

module.exports = sanitizeInput;