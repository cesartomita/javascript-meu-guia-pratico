const sql = require('mssql'); // npm install mssql

const config = {
    user: 'sa',
    password: '123456',
    server: 'localhost',
    database: 'AdventureWorks2014',
    options: {
        trustServerCertificate: true,
    },
};

async function executaQuery(params) {

    console.log("Conectando com o banco de dados...");

    try {

        await sql.connect(config);

        console.log("Executando query...");

        if (params) {

            const query = `SELECT * FROM Person.StateProvince WHERE Name = @name`;

            const request = new sql.Request();

            request.input('name', sql.VarChar, params);

            const result = await request.query(query);

            console.log("Consulta com sucesso!");

            return result.recordset;

        } else {

            console.error("Parâmetro não fornecido");

        };

    } catch(e) {

        console.error("Erro ao conectar:", e.message);

    } finally {

        console.log("Fechando conexão.");

        await sql.close();

    };

};

async function main() {

    try {

        const result = await executaQuery('California');

        if (result) {
            console.dir(result);
        };

    } catch(e) {

        console.log("Erro no processo:", e.message);

    };

};

main();