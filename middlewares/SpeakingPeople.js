const fs = require('fs').promises;

const SpeakingPeople = async (_req, res) => {
  const speakersJSON = await fs.readFile('talker.json', 'utf-8');
  const listSpeakers = JSON.parse(speakersJSON);

  if (listSpeakers.length === 0) {
    return res.status(200).json([]);
  }
  
  return res.status(200).json(listSpeakers);
};

module.exports = SpeakingPeople;