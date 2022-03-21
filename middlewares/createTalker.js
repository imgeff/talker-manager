const addTalker = require('../helpers/addTalker');
const tokenValidation = require('../helpers/tokenValidation');
const talkerValidation = require('../helpers/talkerValidation');

const createTalker = (req, res) => {
  const { authorization } = req.headers;
  const { name, age, talk } = req.body;
  const returnTokenValidation = tokenValidation(authorization);
  const returnTalkerValidation = talkerValidation(name, age, talk);
  const newTalker = addTalker({ name, age, talk });

  if (returnTokenValidation !== undefined) {
    return res.status(401).json({ message: returnTokenValidation });
  }

  if (returnTalkerValidation !== undefined) {
    return res.status(400).json({ message: returnTalkerValidation });
  }

  return res.status(201).json(newTalker);
};

module.exports = createTalker;