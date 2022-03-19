const fs = require('fs');

const getTalkerById = (req, res) => {
  const { id } = req.params;
  const speakersJSON = fs.readFileSync('talker.json', 'utf-8');
  const listSpeakers = JSON.parse(speakersJSON);
  const foundId = listSpeakers.find((talker) => talker.id === Number(id));

  if (!foundId) return res.status(404).json({ message: 'Pessoa palestrante não encontrada' });

  return res.status(200).json(foundId);
};

module.exports = getTalkerById;