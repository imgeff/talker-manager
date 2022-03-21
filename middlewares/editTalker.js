const { readFile, writeFile } = require('../helpers/fsJSON');
const tokenValidation = require('../helpers/tokenValidation');

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
  const { authorization } = req.headers;
  const { id } = req.params;
  const { name, age, talk } = req.body;
  const returnTokenValidation = tokenValidation(authorization);
  const talkerEdited = speakersListEdit(name, age, id, talk);

  if (returnTokenValidation !== undefined) {
    return res.status(401).json({ message: returnTokenValidation });
  }
  return res.status(200).json(talkerEdited);
};

module.exports = editTalker;