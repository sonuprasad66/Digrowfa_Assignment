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
  try {
    const { search, country, sort } = req.query;

    let users;
    if (search) {
      users = await userModel.find({ name: search });
    } else if (country) {
      users = await userModel.find({ country: country });
    } else if (sort) {
      if (sort === "asc") {
        users = await userModel.find({}).sort({ dob: 1 });
      } else {
        users = await userModel.find({}).sort({ dob: -1 });
      }
    } else {
      users = await userModel.find({});
    }

    if (users.length > 0) {
      res.send(users);
    } else {
      res.send({ message: "User Not Found" });
    }
  } catch (err) {
    console.log(err);
  }
};

const updateUser = async (req, res) => {
  const { id, data } = req.body;

  const updatedData = await userModel.findByIdAndUpdate(
    { _id: id },
    { _id: id, ...data },
    { new: true }
  );
  res.send({ message: "User updated successfully", status: "success" });
};

const deleteUser = async (req, res) => {
  const { id } = req.params;
  const users = await userModel.deleteOne({ _id: id });
  res.send({
    users: users,
    message: "User deleted successfully",
    status: "success",
  });
};

module.exports = {
  addUser,
  getUser,
  updateUser,
  deleteUser,
};
