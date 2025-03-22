const Joi = require('joi');

const userSchema = Joi.object({
    name: Joi.string().min(3).required(),
    email: Joi.string().email().required(),
    interest: Joi.array().items(Joi.string()),
    age: Joi.number().min(18).required(),
    mobile: Joi.string().length(10).pattern(/^[0-9]+$/).required()
});

module.exports = userSchema;