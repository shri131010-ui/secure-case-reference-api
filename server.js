require("dotenv").config();

const express = require("express");
const cors = require("cors");

const app = express();

const caseRoutes = require("./routes/caseRoutes");

const {
  notFound,
  errorHandler,
} = require("./middleware/errorHandler");

const logger = require("./middleware/logger");


// Middlewares
app.use(cors());
app.use(express.json());
app.use(logger);


// Home Route
app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Secure Case Reference Lookup API is running successfully.",
  });
});


// Case Routes
app.use("/api/cases", caseRoutes);


// 404 Middleware
app.use(notFound);


// Global Error Handler
app.use(errorHandler);



const PORT = process.env.PORT || 3000;


const server = app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});


// Debug checks
server.on("close", () => {
  console.log("SERVER CLOSED");
});

server.on("error", (err) => {
  console.log("SERVER ERROR:", err);
});