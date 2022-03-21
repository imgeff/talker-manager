const { readFile, writeFile } = require('./fsJSON');

function addTalker({ name, age, talk }) {
  const listSpeakers = readFile('talker.json', true);
  const newTalker = { name, age, id: listSpeakers.length + 1, talk };
  listSpeakers.push(newTalker);
  writeFile('talker.json', listSpeakers, true);
  return newTalker;
}

module.exports = addTalker;