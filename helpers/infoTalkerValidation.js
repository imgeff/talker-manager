const fieldVerification = require('./fieldVerification');
const talkValidation = require('./talkValidation');

const {
  nameErrorMsg1,
  nameErrorMsg2,
  ageErrorMsg1,
  ageErrorMsg2,
} = require('./errorMessages');

function infoTalkerValidation(name, age, talk) {
  // Condições
  const nameCondition = name !== undefined ? name.length <= 3 : null;
  const ageCondition = age !== undefined ? age < 18 : null;
  // Retorno de Validações
  const returnNameValidation = fieldVerification(name, nameCondition, nameErrorMsg1, nameErrorMsg2);
  const returnAgeValidation = fieldVerification(age, ageCondition, ageErrorMsg1, ageErrorMsg2);
  const returnTalkValidation = talkValidation(talk);
  // Estruturas Condicionais
  if (returnNameValidation !== undefined) {
    return returnNameValidation; 
  }
  if (returnAgeValidation !== undefined) {
    return returnAgeValidation;
  }

  return returnTalkValidation;
}

module.exports = infoTalkerValidation;