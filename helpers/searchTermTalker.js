const { readFile } = require('./fsJSON');

function searchTermTalker(term) {
  const speakersList = readFile('talker.json', true);
  if (term === undefined || term === '') return speakersList;
  const findTerm = speakersList.filter((speaker) => speaker.name.includes(term));
  if (typeof findTerm !== 'object') return [];
  return findTerm;
}

module.exports = searchTermTalker;