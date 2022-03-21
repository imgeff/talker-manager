const speakersListEdit = require('../helpers/speakersListEdit');
const tokenValidation = require('../helpers/tokenValidation');
const talkerValidation = require('../helpers/talkerValidation');

const editTalker = (req, res) => {
  // Constantes
  const { authorization } = req.headers;
  const { id } = req.params;
  const { name, age, talk } = req.body;
  // Retorno de Validações
  const returnTokenValidation = tokenValidation(authorization);
  const returnTalkerValidation = talkerValidation(name, age, talk);
  const talkerEdited = speakersListEdit(name, age, id, talk);
  // Condicionais
  if (returnTokenValidation !== undefined) {
    return res.status(401).json({ message: returnTokenValidation });
  }
  if (returnTalkerValidation !== undefined) {
    return res.status(400).json({ message: returnTalkerValidation });
  }

  return res.status(200).json(talkerEdited);
};

module.exports = editTalker;