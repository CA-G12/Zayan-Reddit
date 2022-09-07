const Joi = require('joi');

const postschema = Joi.object({
  content: Joi.string().required(),
  userId: Joi.number().integer().required(),
  image: Joi.string().allow(''),
});
const postValidation = (postDataObj) => postschema.validateAsync(postDataObj);

module.exports = postValidation;
