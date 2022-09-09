const { commentValidation } = require('../../validation');
const { addCommentQuery } = require('../../database/queries');
const { CustomizedServerErrors } = require('../../utils');

const addComment = (req, res, next) => {
  console.log('in add comment controller', req.body);
  const { content, userId, postId } = req.body;
  commentValidation(req.body)
    .then(() => addCommentQuery({ content, userId, postId }))
    .then((commentData) => res.json(commentData))
    .catch((err) => {
      if (err.details) {
        next(new CustomizedServerErrors(401, `Validation error : ${err.details[0].message}`));
      }
      next(err);
    });
};
module.exports = addComment;
