const searchTermTalker = require('../helpers/searchTermTalker');

const searchTalker = (req, res) => {
  const { q } = req.query;
  const returnSearchTerm = searchTermTalker(q);

  return res.status(200).json(returnSearchTerm);
};

module.exports = searchTalker;