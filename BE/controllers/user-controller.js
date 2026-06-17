const { status } = require("express/lib/response");
const { User } = require("../models/user-model");

exports.registerUser = async (req, res, next) => {
  try {
    const { username, email, password, cycle } = req.body;
    const user = await User.registerUser(username, email, password, cycle);
    res.status(201).send({ user });
  } catch (err) {
    next(err);
  }
};

exports.logInUser = async (req, res, next) => {
  try {
    const { username, password } = req.body;
    const user = await User.loginUser(username, password);
    res.status(201).send({ user });
  } catch (err) {
    next(err);
  }
};

exports.getUsers = async (req, res, next) => {
  try {
    const users = await fetchUsers();
    if (users.length === 0) {
      console.log("No users");
    }
    res.status(200).send({ users });
  } catch (err) {
    next(err);
  }
};

exports.getUserById = async (req, res, next) => {
  const id = req.params;
  try {
    const user = await fetchUser(id);
    if (!user) {
      console.log("No user found");
    }
    res.status(200).send({ user });
  } catch (err) {
    next(err);
  }
};
