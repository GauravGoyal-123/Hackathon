const Joi = require('joi');

module.exports.problemSchema=Joi.object({
    topic:Joi.string().required(),
    level:Joi.string().required(),
    lang:Joi.string().required(),
    statement:Joi.string().required(),
    example:Joi.string().required()
})

module.exports.discussSchema=Joi.object({
    description:Joi.string().min(10).required(),
    exp:Joi.string().required(),
})