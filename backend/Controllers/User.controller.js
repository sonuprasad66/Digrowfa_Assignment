const { userModel } = require("../Models/User.model");

const addUser = async (req, res) => {
  try {
    const { name, email, dob, address, country } = req.body;
    const user = await userModel.findOne({ email });
    if (user) {
      res.send({ message: "Email already Exists", status: "Exists" });
    } else {
      const new_user = await userModel.create({
        name: name,
        email: email,
        dob: dob,
        address: address,
        country: country,
      });
      res.send({ message: "User saved successfully", status: "success" });
    }
  } catch (err) {
    res.send(err);
    res.send({ message: "User saved Failed", status: "error" });
  }
};

const getUser = async (req, res) => {
  const users = await userModel.find({});
  res.send(users);
};

module.exports = {
  addUser,
  getUser,
};
