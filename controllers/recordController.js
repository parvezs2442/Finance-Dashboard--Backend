import Record from "../models/Record.js";

export const createRecord = async (req, res) => {
  const record = await Record.create({ ...req.body, user: req.user.id });
  res.json(record);
};

export const getRecords = async (req, res) => {
  const { type, category, page = 1, limit = 5 } = req.query;

  const query = { user: req.user.id };
  if (type) query.type = type;
  if (category) query.category = category;

  const records = await Record.find(query)
    .skip((page - 1) * limit)
    .limit(Number(limit));

  res.json(records);
};

export const updateRecord = async (req, res) => {
  const record = await Record.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(record);
};

export const deleteRecord = async (req, res) => {
  await Record.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted" });
};