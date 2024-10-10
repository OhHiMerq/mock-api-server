const express = require("express");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Mock API Server");
});

app.post("/process-delivery/", (req, res) => {
  const { deliveryId, processedAt, deliveryStatus } = req.body.delivery;
  const message = `[${new Date()}] Delivery ${deliveryId} is set to ${deliveryStatus} at ${processedAt}`;
  console.log(message);
  res.json({ data: { input: req.body, message } });
});

app.get("/token", (req, res) => {
  console.log("TOKEN RECEIVED", req.body, req.headers);
  res.header("x-csrf-token", "fetch");
  res.header("set-cookie", "sap-cookie");
  res.json({ data: { token: "token-sample", cookie: "cookie-sample" } });
});

app.post("/collection-sap", (req, res) => {
  console.log("COLLECTION SAP RECEIVED", req.body, req.headers);
  res.json({ data: { status: "SUCCESS!!" } });
});

app.listen(4000, () => {
  console.log("listening to port 4000");
});
