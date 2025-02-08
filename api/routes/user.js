const express = require("express");
const Validator = require("fastest-validator");
const User = require("../models/User");

const userRouter = express.Router();
userRouter.use(express.json());

// Get all users route
userRouter.get("/", async (req, res) => {
  res.status(200).send(await User.GetAll());
});

// Remove user route
userRouter.delete("/remove", async (req, res) => {
  let result = await User.Remove(req.query.id);
  if (result) {
    res.status(200).send(true);
  } else {
    res.status(404).send(false);
  }
});

// Add user route
userRouter.post("/add", (req, res) => {
  const docValidate = new Validator();
  let check = docValidate.compile({
    name: {
      type: "string",
      required: true,
    },
    family: {
      type: "string",
      required: true,
    },
    age: {
      type: "number",
      required: true,
      min: 1,
      max: 99,
      positive: true,
      integer: true,
    },
    job: {
      type: "string",
      required: true,
    },
    address: {
      type: "string",
      required: true,
    },
    isArchive: {
      type: "boolean",
    },
  });

  if (check(req.body) == true) {
    if (User.Add(req.body)) {
      res.status(200).send(true);
    } else {
      res.status(400).send(true);
    }
  } else {
    res.status(400).send(false);
  }
});

module.exports = userRouter;
