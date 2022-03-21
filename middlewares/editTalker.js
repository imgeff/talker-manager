const { readFile, writeFile } = require('../helpers/fsJSON');
const tokenValidation = require('../helpers/tokenValidation');
const talkerValidation = require('../helpers/talkerValidation');

function speakersListEdit(name, age, id, talk) {
  const listSpeakers = readFile('talker.json', true);
  const oldSpeaker = listSpeakers.find((speaker) => speaker.id === Number(id));
  const indexSpeaker = listSpeakers.indexOf(oldSpeaker);
  const newSpeaker = { age, id, name, talk };
  listSpeakers[indexSpeaker] = newSpeaker;
  writeFile('talker.json', listSpeakers, true);
  return newSpeaker;
}

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