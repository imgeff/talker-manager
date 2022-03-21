const infoTalkerValidation = require('../helpers/infoTalkerValidation');

const talkerValidation = (req, res, next) => {
  const { name, age, talk } = req.body;
  const returnInfoTalkerValidation = infoTalkerValidation(name, age, talk);

  if (returnInfoTalkerValidation !== undefined) {
    return res.status(400).json({ message: returnInfoTalkerValidation });
  }
  next();
};

module.exports = talkerValidation;