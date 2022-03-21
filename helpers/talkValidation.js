const dateValidation = require('./dateValidation');
const { watchedErrorMsg, rateErrorMsg, talkErrorMsg } = require('./errorMessages');

function talkPropertysValidation({ watchedAt, rate }) {
  const returnDateValidation = dateValidation(watchedAt);

  if (rate < 1 || rate > 5) return rateErrorMsg;
  if (returnDateValidation === false) return watchedErrorMsg;
}

function talkValidation(talk) {
  const talkPropertys = talk !== undefined ? Object.keys(talk) : undefined;

  if (talk === undefined || talkPropertys.length !== 2) return talkErrorMsg;

  const returnTalkPropertysValidation = talkPropertysValidation(talk);

  if (returnTalkPropertysValidation !== undefined) return returnTalkPropertysValidation;
}

console.log(talkValidation(undefined));

module.exports = talkValidation;