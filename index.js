const express = require("express");
const { uuid } = require("uuidv4");

const app = express();

app.use(express.json());

const questions = [];

app.get("/questions", (req, res) => {
  return res.json(questions);
});

app.post("/questions", (req, res) => {
  const question = req.body;
  const id = uuid();
  questions.push({ ...question, id });
  return res.json({ ...question, id });
});

app.listen(process.env.PORT || 3333);
