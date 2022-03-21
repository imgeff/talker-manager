const { tokenErrorMsg1, tokenErrorMsg2 } = require('../helpers/errorMessages');
const fieldVerification = require('../helpers/fieldVerification');

const tokenValidation = (req, res, next) => {
  // Constantes
  const { authorization } = req.headers;
  const tokenCondition = authorization !== undefined ? authorization.length !== 16 : undefined;
  // Retorno de Validações
  const returnTokenValidation = (
    fieldVerification(authorization, tokenCondition, tokenErrorMsg1, tokenErrorMsg2)
  );
  // Condicionais
  if (returnTokenValidation !== undefined) {
    return res.status(401).json({ message: returnTokenValidation });
  }
  next();
};

module.exports = tokenValidation;