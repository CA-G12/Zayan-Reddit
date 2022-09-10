const { getUserProfileDataQuery} = require('../../database/queries');

const getUserData = (req, res) => {
  console.log('in getUserData contttttttttttttttttttttttttt');
  getUserProfileDataQuery(req.params.id).then((userData) => {
    console.log(userData);
    res.json(userData);
  });
};

module.exports = getUserData;
