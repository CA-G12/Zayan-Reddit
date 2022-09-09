const Joi = require('joi');

const commentSchema = Joi.object({
  content: Joi.string().required(),
  userId: Joi.number().integer().required(),
  postId: Joi.number().integer().required(),
});
const commentValidation = (commentDataObj) => commentSchema.validateAsync(commentDataObj);

module.exports = commentValidation;
