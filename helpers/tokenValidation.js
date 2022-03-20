const { tokenErrorMsg1, tokenErrorMsg2 } = require('./errorMessages');
const fieldVerification = require('./fieldVerification');

function tokenValidation(authorization) {
  const tokenCondition = authorization !== undefined ? authorization.length !== 16 : undefined;
  return fieldVerification(authorization, tokenCondition, tokenErrorMsg1, tokenErrorMsg2);
}

module.exports = tokenValidation;