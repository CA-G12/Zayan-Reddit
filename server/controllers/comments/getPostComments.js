const { getPostCommentsQuery } = require('../../database/queries');

const getPostComments = (req, res, next) => {
  const { id } = req.params;
  console.log('in get post comments', id);
  getPostCommentsQuery(id)
    .then((commentsArray) => res.json(commentsArray))
    .catch(next);
};

module.exports = getPostComments;
