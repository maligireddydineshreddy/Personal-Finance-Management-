// Import required dependencies
require("dotenv").config(); // Load environment variables
const express = require("express");
const connectDB = require("./config/db");
const cors = require("cors"); // Import CORS middleware
const bodyParser = require("body-parser"); // Import body-parser

// Import routes
const userRoutes = require("./routes/UserRoutes");
const expenseRoutes = require("./routes/ExpenseRoutes");
const savingsRoutes = require("./routes/SavingsRoutes");
const billsRoutes = require("./routes/BillsRoute");

// Create an Express application
const app = express();

// Connect to the database
connectDB();

// Define a port (changed from 8000 to avoid conflict with ML API on 8000)
const PORT = process.env.PORT || 3001;

// CORS configuration
const allowedOrigins = process.env.CORS_ORIGIN 
  ? process.env.CORS_ORIGIN.split(',').map(origin => origin.trim())
  : ['http://localhost:5173', 'http://localhost:3000'];

// Middleware to parse JSON requests
app.use(cors({
  origin: function (origin, callback) {
    // Allow requests with no origin (like mobile apps or curl requests)
    if (!origin) return callback(null, true);
    if (allowedOrigins.indexOf(origin) !== -1 || process.env.NODE_ENV !== 'production') {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true
}));
app.use(bodyParser.json()); // Use body-parser to parse JSON
app.use(bodyParser.urlencoded({ extended: true })); // Parse URL-encoded bodies

// Health check endpoint for keeping service alive
app.get("/health", (req, res) => {
  res.status(200).json({ status: "ok", message: "FinancePro backend is running" });
});

app.get("/api/health", (req, res) => {
  res.status(200).json({ status: "ok", message: "FinancePro backend API is running" });
});

// Use the routes
app.use("/api/users", userRoutes);
app.use("/api/expenses", expenseRoutes);
app.use("/api/savings", savingsRoutes);
app.use("/api/bills", billsRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
