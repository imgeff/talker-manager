const speakersListEdit = require('../helpers/speakersListEdit');
const talkerValidation = require('../helpers/talkerValidation');

const editTalker = (req, res) => {
  // Constantes
  const { id } = req.params;
  const { name, age, talk } = req.body;
  // Retorno de Validações
  const returnTalkerValidation = talkerValidation(name, age, talk);
  const talkerEdited = speakersListEdit(name, age, id, talk);
  // Condicionais
  if (returnTalkerValidation !== undefined) {
    return res.status(400).json({ message: returnTalkerValidation });
  }

  return res.status(200).json(talkerEdited);
};

module.exports = editTalker;