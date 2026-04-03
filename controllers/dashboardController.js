import Record from "../models/Record.js";
import mongoose from "mongoose";

export const getSummary = async (req, res) => {
  const records = await Record.find({ user: req.user.id });

  let income = 0, expense = 0;
  records.forEach(r => {
    if (r.type === "income") income += r.amount;
    else expense += r.amount;
  });

  res.json({ income, expense, balance: income - expense });
};

export const categorySummary = async (req, res) => {
  const data = await Record.aggregate([
    { $match: { user: new mongoose.Types.ObjectId(req.user.id) } },
    { $group: { _id: "$category", total: { $sum: "$amount" } } }
  ]);

  res.json(data);
};

export const monthlyTrends = async (req, res) => {
  const data = await Record.aggregate([
    { $match: { user: new mongoose.Types.ObjectId(req.user.id) } },
    { $group: { _id: { $month: "$date" }, total: { $sum: "$amount" } } }
  ]);

  res.json(data);
};