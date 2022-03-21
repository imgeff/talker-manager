const { readFile } = require('../helpers/fsJSON');

const getTalkerById = (req, res) => {
  const { id } = req.params;
  const listSpeakers = readFile('talker.json', true);
  const foundId = listSpeakers.find((talker) => talker.id === Number(id));

  if (!foundId) return res.status(404).json({ message: 'Pessoa palestrante não encontrada' });

  return res.status(200).json(foundId);
};

module.exports = getTalkerById;