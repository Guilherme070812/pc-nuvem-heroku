const express = require("express");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  return res.json({
    hello: "Hello world",
  });
});

app.listen(process.env.PORT || 3333);
