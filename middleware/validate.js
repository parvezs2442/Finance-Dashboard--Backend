import Joi from "joi";

export const recordSchema = Joi.object({
  amount: Joi.number().required(),
  type: Joi.string().valid("income", "expense").required(),
  category: Joi.string().required(),
  date: Joi.date().required()
});

export const validateRecord = (req, res, next) => {
  const { error } = recordSchema.validate(req.body);

  if (error) {
    return res.status(400).json({ message: error.details[0].message });
  }

  next();
};