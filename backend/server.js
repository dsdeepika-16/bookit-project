const express = require("express");
const cors = require("cors");
const experienceRoutes = require("./routes/experienceRoutes");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// Root route
app.get("/", (req, res) => {
  res.send("API is running...");
});

// Experience routes
app.use("/api/experiences", experienceRoutes);

app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
