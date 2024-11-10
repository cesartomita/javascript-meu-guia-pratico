const envObj = require('dotenv').config().parsed; // npm install dotenv

// Mastra as variáveis de ambiente do arquivo .env
console.log(envObj);

// Acessando uma variável de ambiente específica
const usuarioSqlServer = envObj.SQL_SERVER_USER;

// Mostrando a variável de ambiente específica
console.log(usuarioSqlServer);