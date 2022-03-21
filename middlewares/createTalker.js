const addTalker = require('../helpers/addTalker');

const createTalker = (req, res) => {
  const { name, age, talk } = req.body;
  const newTalker = addTalker({ name, age, talk });

  return res.status(201).json(newTalker);
};

module.exports = createTalker;