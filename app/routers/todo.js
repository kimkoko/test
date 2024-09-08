const express = require("express");
const Todo = require("../schemas/todos");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const result = await Todo.find(req.params.id);
    res.status(200).json(result);
  } catch (error) {
    console.log(error);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const result = await Todo.create({
      title: "hello",
      user: "user1",
      content: "world",
    });
    res.status(201), json(result);
  } catch (error) {
    console.log(error);
    next(error);
  }
});
