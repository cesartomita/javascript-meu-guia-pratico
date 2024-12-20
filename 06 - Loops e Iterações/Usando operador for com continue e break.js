const nomes = ["Alice", "Bob", "Carlos", "Diana", "Eduardo", "Fernanda", "Gabriel"];

const nomeProcurar = "Fernanda";

for (let i = 0; i < nomes.length; i++) {

    if (nomes[i].startsWith("D")) {
        continue;
    };

    console.log(`Verificando: ${nomes[i]}.`);

    if (nomes[i] === nomeProcurar) {
        console.log(`Nome ${nomeProcurar} encontrado, saindo do loop.`);
        break;
    };

};

// Resultado:
// Verificando: Alice.
// Verificando: Bob.
// Verificando: Carlos.
// Verificando: Eduardo.
// Verificando: Fernanda.
// Nome Fernanda encontrado, saindo do loop.