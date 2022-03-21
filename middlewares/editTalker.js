const speakersListEdit = require('../helpers/speakersListEdit');

const editTalker = (req, res) => {
  const { id } = req.params;
  const { name, age, talk } = req.body;

  const talkerEdited = speakersListEdit(name, age, id, talk);

  return res.status(200).json(talkerEdited);
};

module.exports = editTalker;