const generateToken = require('../helpers/generateToken');
const validateLogin = require('../helpers/validateLogin');

const login = (req, res) => {
  const { email, password } = req.body;
  const validationReturn = validateLogin(email, password);
  const token = generateToken(16);
  if (validationReturn !== undefined) {
    return res.status(400).json({ message: validationReturn });
  }
  return res.status(200).json({ token });
};

module.exports = login;