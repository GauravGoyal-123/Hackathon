const Joi = require('joi');

module.exports.problemSchema=Joi.object({
    topic:Joi.string().trim().min(1).required(),
    level:Joi.string().trim().min(1).required(),
    lang:Joi.string().min(1).required(),
    statement:Joi.string().trim().min(10).required(),
    example:Joi.string().trim().min(5).required()
})

module.exports.discussSchema=Joi.object({
    description:Joi.string().min(10).required(),
    exp:Joi.string().required(),
})