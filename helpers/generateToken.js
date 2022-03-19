// Construção feita com base nas respostas desse link https://stackoverflow.com/questions/8532406/create-a-random-token-in-javascript-based-on-user-details
function generateToken(length) {
  const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890'.split('');
  const randomCharacters = [];  
  for (let index = 0; index < length; index += 1) {
      const indexCharacter = Math.round((Math.random() * (characters.length - 1)));
      randomCharacters.push(characters[indexCharacter]);
  }
  const token = randomCharacters.join('');
  return token;
}

module.exports = generateToken;