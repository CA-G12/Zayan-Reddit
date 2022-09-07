// this middleware is created to send data to the /main
// after checking that there is a verified token:
// as the main page is for both signed and unsigened user and data in it changes based in this info
const sendUserData = (req, res) => {
  console.log('in send data');
  const { username, avatar } = req.token;
  console.log(username, avatar);
  res.json({ istoken: true, username, avatar });
};
module.exports = sendUserData;
