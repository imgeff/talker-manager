const fieldVerification = require('./fieldVerification');
const dateValidation = require('./dateValidation');
const {
  nameErrorMsg1,
  nameErrorMsg2,
  ageErrorMsg1,
  ageErrorMsg2,
  talkErrorMsg,
  watchedErrorMsg,
  rateErrorMsg,
} = require('./errorMessages');

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

function talkerValidation(name, age, talk) {
  // Condições
  const nameCondition = name !== undefined ? name.length <= 3 : null;
  const ageCondition = age !== undefined ? age < 18 : null;
  // Retorno de Validações
  const nameValidation = fieldVerification(name, nameCondition, nameErrorMsg1, nameErrorMsg2);
  const ageValidation = fieldVerification(age, ageCondition, ageErrorMsg1, ageErrorMsg2);
  // Estruturas Condicionais
  if (nameValidation !== undefined) return nameValidation;
  if (ageValidation !== undefined) return ageValidation;
  return talkVerification(talk);
}

module.exports = talkerValidation;