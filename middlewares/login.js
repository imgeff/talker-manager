const generateToken = require('../helpers/generateToken');
const validateLogin = require('../helpers/validateLogin');

const login = (req, res) => {
  const { email, password } = req.body;
  const returnValidation = validateLogin(email, password);
  const token = generateToken(16);
  if (returnValidation !== undefined) {
    return res.status(400).json({ message: returnValidation });
  }
  return res.status(200).json({ token });
};

module.exports = login;