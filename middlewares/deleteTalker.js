const tokenValidation = require('../helpers/tokenValidation');
const removeTalker = require('../helpers/removeTalker');

const deleteTalker = (req, res) => {
  const { id } = req.params;
  const { authorization } = req.headers;
  const returnTokenValidation = tokenValidation(authorization);
  const returnRemoveTalker = removeTalker(id);

  if (returnTokenValidation !== undefined) {
    return res.status(401).json({ message: returnTokenValidation });
  }

  return res.status(204).json(returnRemoveTalker);
};

module.exports = deleteTalker;