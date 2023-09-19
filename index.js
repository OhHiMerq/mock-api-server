const express = require("express");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Mock API Server");
});

app.post("/complete-delivery/", (req, res) => {
  const { deliveryId, dateTime } = req.body;
  const message = `Delivery ${deliveryId} is set to complete at ${dateTime}`;
  console.log(message);
  res.json({ data: { input: req.body, message } });
});

app.listen(4000, () => {
  console.log("listening to port 4000");
});
