const sql = require('mssql'); // npm install mssql

const config = {
    user: 'sa',
    password: '123456',
    server: 'localhost',
    database: 'DEMO_INJECTION',
    options: {
        trustServerCertificate: true,
    },
};

async function exampleExecuteQuery(id) {

    console.log("Conectando com o banco de dados...");

    try {

        await sql.connect(config);

        console.log("Executando query...");
     
        const query = `SELECT * FROM USERS WHERE ID = ${id};`;

        console.log(query)

        const result = await sql.query(query);

        console.log("Consulta com sucesso!");

        return result.rowsAffected;

    } catch(e) {

        console.error("Erro ao conectar:", e.message);

    } finally {

        console.log("Fechando conexão.");

        await sql.close();

    };

};


async function exampleExecuteWithParamQuery(params) {

    console.log("Conectando com o banco de dados...");

    try {

        await sql.connect(config);

        console.log("Executando query...");
     
        const query = `SELECT * FROM USERS WHERE ID = @id;`;

        console.log(query)

        const request = new sql.Request();

        request.input('id', sql.Int, params);

        const result = await request.query(query);

        console.log("Consulta com sucesso!");

        return result.rowsAffected;

    } catch(e) {

        console.error("Erro ao conectar:", e.message);

    } finally {

        console.log("Fechando conexão.");

        await sql.close();

    };

};

async function main() {

    try {

        const result1 = await exampleExecuteQuery("5");
        console.log(result1) // Pass

        const result2 = await exampleExecuteQuery('5; DELETE USERS;--');     
        console.log(result2) // Pass

        const result3 = await exampleExecuteWithParamQuery("5");
        console.log(result3) // Pass

        const result4 = await exampleExecuteWithParamQuery('5; DELETE USERS;--');  
        console.log(result4) // Error: Validation failed for parameter 'id'. Invalid number.

    } catch(e) {

        console.log("Erro no processo:", e.message);

    };

};

main();