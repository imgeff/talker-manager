const removeTalker = require('../helpers/removeTalker');

const deleteTalker = (req, res) => {
  const { id } = req.params;
  const returnRemoveTalker = removeTalker(id);

  return res.status(204).json(returnRemoveTalker);
};

module.exports = deleteTalker;