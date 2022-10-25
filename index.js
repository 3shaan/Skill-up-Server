const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const cors = require("cors");

app.use(cors());

app.get("/", (req, res) => {
  res.send("API is Running");
});




app.listen(port, () => {
  console.log("Dragon News Server running on port", port);
});