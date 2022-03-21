const express = require('express');
const bodyParser = require('body-parser');
const getTalkers = require('./middlewares/getTalkers');
const getTalkerById = require('./middlewares/getTalkerById');
const tokenValidation = require('./middlewares/tokenValidation');
const talkerValidation = require('./middlewares/talkerValidation');
const searchTalker = require('./middlewares/searchTalker');
const createTalker = require('./middlewares/createTalker');
const editTalker = require('./middlewares/editTalker');
const deleteTalker = require('./middlewares/deleteTalker');
const login = require('./middlewares/login');

const app = express();
app.use(bodyParser.json());

const HTTP_OK_STATUS = 200;
const PORT = '3000';

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.status(HTTP_OK_STATUS).send();
});

app.get('/talker', getTalkers);

app.get('/talker/search', tokenValidation, searchTalker);

app.get('/talker/:id', getTalkerById);

app.post('/talker', tokenValidation, talkerValidation, createTalker);

app.post('/login', login);

app.put('/talker/:id', tokenValidation, talkerValidation, editTalker);

app.delete('/talker/:id', tokenValidation, deleteTalker);

app.listen(PORT, () => {
  console.log('Online');
});
