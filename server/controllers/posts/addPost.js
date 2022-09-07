const { postValidation } = require('../../validation');
const { CustomizedServerErrors } = require('../../utils');
const { addPostQuery } = require('../../database/queries');
// post validation
// addpost
// send post in res
// catch validation errors

const addPost = (req, res, next) => {
  console.log('in addPost router', req.body);
  const { content, image } = req.body;
  const { id, username, avatar } = req.token;
  const userId = id;
  console.log('userId', userId);
  postValidation({ userId, content, image })
    .then(() => addPostQuery({ content, image, userId }))
    .then((postData) => { req.postData = postData; next(); })
    .catch((err) => {
      if (err.details) {
        // console.log(err.details[0].message);
        next(new CustomizedServerErrors(401, `Validation error : ${err.details[0].message}`));
      }
      next(err);
    });
};

module.exports = addPost;
