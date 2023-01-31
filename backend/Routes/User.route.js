const express = require("express");
const {
  addUser,
  getUser,
  updateUser,
  deleteUser,
} = require("../Controllers/User.controller");
const userRouter = express.Router();

userRouter.get("/getuser", getUser);
userRouter.post("/adduser", addUser);
userRouter.patch("/updateuser", updateUser);
userRouter.delete("/deleteuser/:id", deleteUser);

module.exports = {
  userRouter,
};
