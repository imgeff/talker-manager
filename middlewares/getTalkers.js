const { readFile } = require('../helpers/fsJSON');

const SpeakingPeople = async (_req, res) => {
  const listSpeakers = readFile('talker.json', true);

  if (listSpeakers.length === 0) {
    return res.status(200).json([]);
  }
  
  return res.status(200).json(listSpeakers);
};

module.exports = SpeakingPeople;