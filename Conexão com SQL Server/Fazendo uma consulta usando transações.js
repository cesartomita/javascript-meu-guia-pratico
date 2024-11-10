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

async function executaTransacao() {

    console.log("Iniciando transação...");

    const pool = await sql.connect(config);

    const transaction = new sql.Transaction(pool);

    await transaction.begin();

    try {

        const request = new sql.Request(transaction);

        console.log("Executando primeira consulta...");
        const result1 = await request.query(`UPDATE Person.StateProvince SET Name = 'Albertaaaaa' WHERE StateProvinceID = 1;`);
        console.log("Primeira consulta executada com sucesso! Linhas afetadas:", result1.rowsAffected);

        console.log("Executando segunda consulta...");
        const result2 = await request.query(`UPDATE Person.StateProvince SET TerritoryID = 'CA' WHERE StateProvinceID = 1;`); // consulta com erro para teste
        console.log("Segunda consulta executada com sucesso! Lnhas afetadas:", result2.rowsAffected);
            
        await transaction.commit();
        console.log("Transação concluída com sucesso!");

    } catch (e) {

        if (!transaction._aborted) {
            await transaction.rollback();
        };

        console.error("Erro durante a transação. Realizando rollback:", e.message);
        
    } finally {

        await sql.close();
        console.log("Conexão fechada.");

    };
};

executaTransacao();
