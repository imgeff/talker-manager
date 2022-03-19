function validateEmail(email) {
  if (email === '' || email === undefined) {
    return 'O campo "email" é obrigatório';
  }
  if (email.includes('@') === false || email.includes('.com') === false) {
    return 'O "email" deve ter o formato "email@email.com"';
  }
}

function validatePassword(password) {
  if (password === '' || password === undefined) {
    return 'O campo "password" é obrigatório';
  }
  if (password.length < 6) {
    return 'O "password" deve ter pelo menos 6 caracteres';
  }
}

function validateLogin(email, password) {
  if (validateEmail(email) !== undefined) {
    return validateEmail(email);
  }
  return validatePassword(password);
}

module.exports = validateLogin;