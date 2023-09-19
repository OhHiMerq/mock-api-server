const express = require("express");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Mock API Server");
});

app.post("/complete-delivery/", (req, res) => {
  const { deliveryId, completedAt } = req.body.delivery;
  const message = `[${new Date()}] Delivery ${deliveryId} is set to complete at ${completedAt}`;
  console.log(message);
  res.json({ data: { input: req.body, message } });
});

app.listen(4000, () => {
  console.log("listening to port 4000");
});
