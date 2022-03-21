const tokenValidation = require('../helpers/tokenValidation');

const deleteTalker = (req, res) => {
  const { authorization } = req.headers;
  const returnTokenValidation = tokenValidation(authorization);

  if (returnTokenValidation !== undefined) {
    return res.status(401).json({ message: returnTokenValidation });
  }
};

module.exports = deleteTalker;