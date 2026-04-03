import User from "../models/User.js";

export const getUsers = async (req, res) => {
  const users = await User.find();
  res.json(users);
};

export const updateUser = async (req, res) => {
  const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(user);
};