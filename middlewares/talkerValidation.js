const fieldVerification = require('../helpers/fieldVerification');
const dateValidation = require('../helpers/dateValidation');
const {
  nameErrorMsg1,
  nameErrorMsg2,
  ageErrorMsg1,
  ageErrorMsg2,
  talkErrorMsg,
  watchedErrorMsg,
  rateErrorMsg,
} = require('../helpers/errorMessages');

function talkPropertysVerification({ watchedAt, rate }) {
  const returnDateValidation = dateValidation(watchedAt);

  if (rate < 1 || rate > 5) return rateErrorMsg;
  if (returnDateValidation === false) return watchedErrorMsg;
}

function talkVerification(talk) {
  const talkPropertys = talk !== undefined ? Object.keys(talk) : undefined;

  if (talk === undefined || talkPropertys.length !== 2) return talkErrorMsg;
  if (talkPropertysVerification(talk) !== undefined) return talkPropertysVerification(talk);
}

function infoTalkerValidation(name, age, talk) {
  // Condições
  const nameCondition = name !== undefined ? name.length <= 3 : null;
  const ageCondition = age !== undefined ? age < 18 : null;
  // Retorno de Validações
  const returnNameValidation = fieldVerification(name, nameCondition, nameErrorMsg1, nameErrorMsg2);
  const returnAgeValidation = fieldVerification(age, ageCondition, ageErrorMsg1, ageErrorMsg2);
  const returnTalkValidation = talkVerification(talk);
  // Estruturas Condicionais
  if (returnNameValidation !== undefined) {
    return returnNameValidation; 
  }
  if (returnAgeValidation !== undefined) {
    return returnAgeValidation;
  }

  return returnTalkValidation;
}

const talkerValidation = (req, res, next) => {
  const { name, age, talk } = req.body;
  const returnInfoTalkerValidation = infoTalkerValidation(name, age, talk);

  if (returnInfoTalkerValidation !== undefined) {
    return res.status(400).json({ message: returnInfoTalkerValidation });
  }
  next();
};

module.exports = talkerValidation;