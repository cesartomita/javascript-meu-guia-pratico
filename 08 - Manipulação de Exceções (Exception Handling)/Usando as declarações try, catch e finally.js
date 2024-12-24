const valor = null;

try {

    if (valor === null) {
        throw new Error("O valor é nulo!");
    };

} catch(e) {

    console.error(`Aconteceu um erro: ${e.message}.`);

} finally {

    console.log("Programa finalizado.");

};