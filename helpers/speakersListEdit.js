const { readFile, writeFile } = require('./fsJSON');

function speakersListEdit(name, age, id, talk) {
  const listSpeakers = readFile('talker.json', true);
  const oldSpeaker = listSpeakers.find((speaker) => speaker.id === Number(id));
  const indexSpeaker = listSpeakers.indexOf(oldSpeaker);
  const newSpeaker = { age, id, name, talk };
  listSpeakers[indexSpeaker] = newSpeaker;
  writeFile('talker.json', listSpeakers, true);
  return newSpeaker;
}

module.exports = speakersListEdit;