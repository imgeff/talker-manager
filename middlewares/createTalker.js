const addTalker = require('../helpers/addTalker');
const talkerValidation = require('../helpers/talkerValidation');

const createTalker = (req, res) => {
  const { name, age, talk } = req.body;
  const returnTalkerValidation = talkerValidation(name, age, talk);
  const newTalker = addTalker({ name, age, talk });

  if (returnTalkerValidation !== undefined) {
    return res.status(400).json({ message: returnTalkerValidation });
  }

  return res.status(201).json(newTalker);
};

module.exports = createTalker;