const logout = (req, res) => res.clearCookie('token').send();

module.exports = logout;
