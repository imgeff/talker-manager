const tokenErrorMsg1 = 'Token não encontrado';
const tokenErrorMsg2 = 'Token inválido';
const nameErrorMsg1 = 'O campo "name" é obrigatório';
const nameErrorMsg2 = 'O "name" deve ter pelo menos 3 caracteres';
const ageErrorMsg1 = 'O campo "age" é obrigatório';
const ageErrorMsg2 = 'A pessoa palestrante deve ser maior de idade';
const talkErrorMsg = 'O campo "talk" é obrigatório e "watchedAt" e "rate" não podem ser vazios';
const watchedErrorMsg = 'O campo "watchedAt" deve ter o formato "dd/mm/aaaa"';
const rateErrorMsg = 'O campo "rate" deve ser um inteiro de 1 à 5';

module.exports = {
  tokenErrorMsg1,
  tokenErrorMsg2,
  nameErrorMsg1,
  nameErrorMsg2,
  ageErrorMsg1,
  ageErrorMsg2,
  talkErrorMsg,
  watchedErrorMsg,
  rateErrorMsg,
};