# Talker Manager!
Esta aplicação é uma API de um CRUD (**C**reate, **R**ead, **U**pdate e **D**elete) de palestrantes. foi desenvolvidos alguns endpoints que irão ler e escrever em um arquivo, isso utilizando o módulo `fs`.

---

# Aprendizados

Os maiores desafios  que enfrentei nesse projeto estavam relacionadas as validações e regras de negócios, utilizei pequenas funções com responsabilidades únicas para atender á todas validações sem desrespeitar as regras do lint e os testes feitos pela Trybe, assim conseguir aprender como :

- Realizar operações assíncronas utilizando callbacks;
- Realizar operações assíncronas utilizando Promises;
- Ler e escrever arquivos localmente com NodeJS;
- Escrever seus próprios scripts que criam e consomem Promises;
- Reescrever código que usa callbacks para que use Promises;
- Realizar chamadas de funções de forma consciente;
- Entender os conceitos básicos de como o JavaScript funciona;
- Detectar e solucionar problemas no código de forma mais objetiva;
- Entender a diferença entre execução síncrona e assíncrona;
- Entender o que é o HTTP, o que é uma API e o que os dois têm a ver com o Express;
- Escrever APIs utilizando Node e Express;
- Entender a estrutura de uma aplicação Express e como organizar seu código;
- Criar rotas e aplicar middlewares.
---

## Desenvolvimento

## Para instalar localmente:

1. Clone o repositório

- `git clone git@github.com:imgeff/talker-manager.git`.
- Entre na pasta do repositório que você acabou de clonar:
  - `cd talker-manager`

2. Instale as dependências

- `npm install`
- 
3. Inicialize o servidor

- `npm start`


### Linter

foi utilizado o [ESLint](https://eslint.org/) para fazer a análise estática do código.

Este projeto já vem com as dependências relacionadas ao _linter_ configuradas nos arquivos `package.json`.

Para poder rodar o `ESLint` em um projeto basta executar o comando `npm install` dentro do projeto e depois `npm run lint`. Se a análise do `ESLint` encontrar problemas no seu código, tais problemas serão mostrados no seu terminal. Se não houver problema no seu código, nada será impresso no seu terminal.

Você pode também instalar o plugin do `ESLint` no `VSCode`, bastar ir em extensions e baixar o [plugin `ESLint`](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint).

## Endpoints

### 1 - Endpoint GET `/talker`

- O endpoint retorna um array com todas as pessoas palestrantes cadastradas com o `status 200`:

- Caso não exista nenhuma pessoa palestrante cadastrada o endpoint retorna um array vazio e o `status 200`.


### 2 - Endpoint GET `/talker/:id`

- O endpoint retorna uma pessoa palestrante com base no id da rota. Com o `status 200` ao fazer uma requisição `/talker/1`, com corpo semelhante a esse:

 ```json
  {
    "name": "NOME_DO_PALESTRANTE",
    "age": IDADE_DO_PALESTRANTE,
    "talk": {
      "watchedAt": "DATA",
      "rate": AVALIAÇÃO
    }
  }
  ```

- Caso não seja encontrada uma pessoa palestrante com base no id da rota, o endpoint retorna o `status 404` com o seguinte corpo:

  ```json
  {
    "message": "Pessoa palestrante não encontrada"
  }
  ```

### 3 - Endpoint POST `/login`

- O endpoint retorna um token aleatório de 16 caracteres que deverá ser utilizado nas demais requisições.

  - O endpoint retorna um código de `status 200` com o token gerado:

- O corpo da requisição deverá ter formato semelhante a esse:

  ```json
  {
    "email": "EMAIL",
    "password": "SENHA"
  }
  ```

- Caso o campo não seja passado ou esteja vazio um código de `status 400` é retornado, com o seguinte corpo:

    ```json
    {
      "message": "O campo \"email\" é obrigatório"
    }
    ```

  - Caso o email passado não seja um email válido um código de `status 400` é retornado, com o seguinte corpo:

    ```json
    {
      "message": "O \"email\" deve ter o formato \"email@email.com\""
    }
    ```

- O campo `password` deverá ter pelo menos 6 caracteres.

  - Caso o campo não seja passado ou esteja vazio um código de `status 400` é retornado, com o seguinte corpo:

    ```json
    {
      "message": "O campo \"password\" é obrigatório"
    }
    ```

  - Caso a senha não tenha pelo menos 6 caracteres um código de `status 400` é retornado, com o seguinte corpo:

    ```json
    {
      "message": "O \"password\" deve ter pelo menos 6 caracteres"
    }
    ```

### 4 - Endpoint POST `/talker`

- O endpoint adiciona uma nova pessoa palestrante ao arquivo `talker.json`;

- O corpo da requisição deverá ter o seguinte formato:

   ```json
  {
    "name": "NOME_DO_PALESTRANTE",
    "age": IDADE_DO_PALESTRANTE,
    "talk": {
      "watchedAt": "DATA",
      "rate": AVALIAÇÃO
    }
  }
  ```

- A requisição deve ter o token de autenticação nos headers, no campo `authorization`.

  - Caso o token não seja encontrado um código de `status 401` é retornado, com o seguinte corpo:

    ```json
    {
      "message": "Token não encontrado"
    }
    ```

  - Caso o token seja inválido um código de `status 401` é retornado, com o seguinte corpo:

    ```json
    {
      "message": "Token inválido"
    }
    ```

- O campo `name` deverá ter no mínimo 3 caracteres. Ele é obrigatório.

  - Caso o campo não seja passado ou esteja vazio um código de `status 400` é retornado, com o seguinte corpo:

    ```json
    {
      "message": "O campo \"name\" é obrigatório"
    }
    ```

  - Caso o nome não tenha pelo menos 3 caracteres um código de `status 400`  é retornado, com o seguinte corpo:

    ```json
    {
      "message": "O \"name\" deve ter pelo menos 3 caracteres"
    }
    ```

- O campo `age` deverá ser um inteiro e apenas pessoas maiores de idade (pelo menos `18 anos`) podem ser cadastrados. Ele é obrigatório.

  - Caso o campo não seja passado ou esteja vazio um código de `status 400`  é retornado, com o seguinte corpo:

    ```json
    {
      "message": "O campo \"age\" é obrigatório"
    }
    ```

  - Caso a pessoa palestrante não tenha pelo menos 18 anos  é retornado um `status 400`, com o seguinte corpo:

    ```json
    {
      "message": "A pessoa palestrante deve ser maior de idade"
    }
    ```

- O campo `talk` deverá ser um objeto com as seguintes chaves:

  - A chave `watchedAt` deve ser uma data no formato `dd/mm/aaaa`.

    - Caso a data não respeito o formato `dd/mm/aaaa` um `status 400`  é retornado, com o seguinte corpo:

    ```json
    {
      "message": "O campo \"watchedAt\" deve ter o formato \"dd/mm/aaaa\""
    }
    ```

  - A chave `rate` deve ser um inteiro de 1 à 5.

    - Caso a nota não seja um inteiro de 1 à 5 um `status 400`  é retornado, com o seguinte corpo:

      ```json
      {
        "message": "O campo \"rate\" deve ser um inteiro de 1 à 5"
      }
      ```

  - O campo `talk` é obrigatório e nenhuma das chaves citadas anteriormente podem ser vazias.

    - Caso o campo não seja informado, esteja vazio ou então alguma de suas chaves não tenham sido informadas um `status 400`  é retornado, com o seguinte corpo:

      ```json
      {
        "message": "O campo \"talk\" é obrigatório e \"watchedAt\" e \"rate\" não podem ser vazios"
      }
      ```
- Caso esteja tudo certo, o `status 201` é retornado com a pessoa cadastrada.

### 5 - Endpoint PUT `/talker/:id`

- O endpoint edita uma pessoa palestrante com base no id da rota, sem alterar o id registrado.

- O corpo da requisição deverá ter o seguinte formato:

  ```json
  {
    "name": "NOME_DO_PALESTRANTE",
    "age": IDADE_DO_PALESTRANTE,
    "talk": {
      "watchedAt": "DATA",
      "rate": AVALIAÇÃO
    }
  }
  ```
  
- A requisição deve ter o token de autenticação nos headers, no campo `authorization`.

  - Caso o token não seja encontrado um código de `status 401` é retornado, com o seguinte corpo:

    ```json
    {
      "message": "Token não encontrado"
    }
    ```

  - Caso o token seja inválido um código de `status 401` é retornado, com o seguinte corpo:

    ```json
    {
      "message": "Token inválido"
    }
    ```

- O campo `name` deverá ter no mínimo 3 caracteres. Ele é obrigatório.

  - Caso o campo não seja passado ou esteja vazio um código de `status 400` é retornado, com o seguinte corpo:

    ```json
    {
      "message": "O campo \"name\" é obrigatório"
    }
    ```

  - Caso o nome não tenha pelo menos 3 caracteres um código de `status 400`  é retornado, com o seguinte corpo:

    ```json
    {
      "message": "O \"name\" deve ter pelo menos 3 caracteres"
    }
    ```

- O campo `age` deverá ser um inteiro e apenas pessoas maiores de idade (pelo menos `18 anos`) podem ser cadastrados. Ele é obrigatório.

  - Caso o campo não seja passado ou esteja vazio um código de `status 400`  é retornado, com o seguinte corpo:

    ```json
    {
      "message": "O campo \"age\" é obrigatório"
    }
    ```

  - Caso a pessoa palestrante não tenha pelo menos 18 anos  é retornado um `status 400`, com o seguinte corpo:

    ```json
    {
      "message": "A pessoa palestrante deve ser maior de idade"
    }
    ```

- O campo `talk` deverá ser um objeto com as seguintes chaves:

  - A chave `watchedAt` deve ser uma data no formato `dd/mm/aaaa`.

    - Caso a data não respeito o formato `dd/mm/aaaa` um `status 400`  é retornado, com o seguinte corpo:

    ```json
    {
      "message": "O campo \"watchedAt\" deve ter o formato \"dd/mm/aaaa\""
    }
    ```

  - A chave `rate` deve ser um inteiro de 1 à 5.

    - Caso a nota não seja um inteiro de 1 à 5 um `status 400`  é retornado, com o seguinte corpo:

      ```json
      {
        "message": "O campo \"rate\" deve ser um inteiro de 1 à 5"
      }
      ```

  - O campo `talk` é obrigatório e nenhuma das chaves citadas anteriormente podem ser vazias.

    - Caso o campo não seja informado, esteja vazio ou então alguma de suas chaves não tenham sido informadas um `status 400`  é retornado, com o seguinte corpo:

      ```json
      {
        "message": "O campo \"talk\" é obrigatório e \"watchedAt\" e \"rate\" não podem ser vazios"
      }
      ```
- Caso esteja tudo certo, o `status 200`  é retornado com a pessoa editada.

### 6 - Endpoint DELETE `/talker/:id`

- A requisição deve ter o token de autenticação nos headers, no campo `authorization`.

  - Caso o token não seja encontrado um código de `status 401` é retornado, com o seguinte corpo:

    ```json
    {
      "message": "Token não encontrado"
    }
    ```

  - Caso o token seja inválido  um código de `status 401` é retornado, com o seguinte corpo:

    ```json
    {
      "message": "Token inválido"
    }
    ```

- O endpoint deleta uma pessoa palestrante com base no id da rota. Retornando o `status 204`, sem conteúdo na resposta.

### 7 - Endpoint GET `/talker/search?q=searchTerm`

- O endpoint retorna um array de palestrantes que contenham em seu nome o termo pesquisado no queryParam da URL. Com o `status 200`.

- A requisição deve ter o token de autenticação nos headers, no campo `authorization`.

  - Caso o token não seja encontrado  um código de `status 401` é retornado, com o seguinte corpo:

    ```json
    {
      "message": "Token não encontrado"
    }
    ```

  - Caso o token seja inválido um código de `status 401` é retornado, com o seguinte corpo:

    ```json
    {
      "message": "Token inválido"
    }
    ```

- Caso `searchTerm` não seja informado ou esteja vazio, o endpoint retorna um array com todos as pessoas palestrantes cadastradas, assim como no endpoint GET `/talker`, com um `status 200`.

- Caso nenhuma pessoa palestrante satisfaça a busca, o endpoint retorna o `status 200` e um array vazio.

---

# Stack utilizada
  **Back-end:** Node.js, Express

# Feedback
Se você tiver algum feedback, por favor mande uma mensagem em https://www.linkedin.com/in/imgeff/
