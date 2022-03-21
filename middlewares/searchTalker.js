const searchTermTalker = require('../helpers/searchTermTalker');
const tokenValidation = require('../helpers/tokenValidation');

const searchTalker = (req, res) => {
  const { authorization } = req.headers;
  const { q } = req.query;
  const returnSearchTerm = searchTermTalker(q);
  const returnTokenValidation = tokenValidation(authorization);

  if (returnTokenValidation !== undefined) {
    return res.status(401).json({ message: returnTokenValidation });
  }
  
  return res.status(200).json(returnSearchTerm);
};

module.exports = searchTalker;