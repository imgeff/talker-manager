const { readFile, writeFile } = require('./fsJSON');

function removeTalker(id) {
  const speakersList = readFile('talker.json', true);
  const deleteSpeaker = speakersList.filter((speaker) => speaker.id !== Number(id));
  writeFile('talker.json', deleteSpeaker, true);
}

module.exports = removeTalker;