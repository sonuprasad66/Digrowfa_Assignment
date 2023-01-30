const express = require("express");
const { addUser, getUser } = require("../Controllers/User.controller");
const userRouter = express.Router();

userRouter.get("/getuser", getUser);
userRouter.post("/adduser", addUser);

module.exports = {
  userRouter,
};
