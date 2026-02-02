const express = require("express");
const app = express();

app.use(express.json());
app.use(express.static("public"));

app.get("/api/health", (req, res) => {
  res.json({ status: "ok", message: "Node app is running" });
});

app.post("/api/order", (req, res) => {
  const order = req.body;
  console.log("Order received:", order);
  res.json({ success: true, message: "Order received" });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
