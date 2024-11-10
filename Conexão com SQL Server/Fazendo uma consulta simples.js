const sql = require('mssql'); // npm install mssql
const envObj = require('dotenv').config().parsed; // npm install dotenv

const config = {
    user: envObj.SQL_SERVER_USER,
    password: envObj.SQL_SERVER_PASS,
    server: envObj.SQL_SERVER_SERVER,
    database: envObj.SQL_SERVER_DATABASE,
    options: {
        trustServerCertificate: true,
    },
};

const query = `SELECT TOP 1 * FROM Person.StateProvince;`;

async function executaQuery() {

    console.log("Conectando com o banco de dados...");

    try {

        await sql.connect(config);

        console.log("Executando query...");

        const result = await sql.query(query);

        console.log("Consulta com sucesso!");

        return result.recordset;

    } catch(e) {

        console.error("Erro ao conectar:", e.message);

    } finally {

        console.log("Fechando conexão.");

        await sql.close();

    };

};

async function main() {

    try {

        const result = await executaQuery();

        if (result) {
            console.log(result);
        };

    } catch(e) {

        console.log("Erro no processo:", e.message);

    };

};

main();