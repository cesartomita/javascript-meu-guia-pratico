// O método filter() em JavaScript é usado para criar um novo array contendo apenas os elementos que atendem a uma condição específica.
// Ele percorre cada item do array original e aplica uma função de teste. Se a função retorna true, o item é incluído no novo array; se retorna false, o item é excluído.

// Sintaxe:

// const novoArray = array.filter(function(elemento, index, array) {
//     // Retorne true ou false
// });

// elemento: O elemento atual que está sendo processado.
// index: O índice do elemento atual (opcional).
// array: O array original que está sendo percorrido (opcional).

// Exemplo 1:

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const numerosPares = numeros.filter(function(num) {
    return num % 2 === 0; 
});

const numerosMaioresQueCinco = numeros.filter(function(num) {
    return num > 5; 
});

console.log(numerosPares); // [ 2, 4, 6, 8, 10 ]
console.log(numerosMaioresQueCinco); // [ 6, 7, 8, 9, 10 ]

// Exemplo 2:

const valores = [1, 'OK', null, 99, true, NaN, false];

const valoresValidos = valores.filter(function(item) {
    return Boolean(item)
});

console.log(valoresValidos); // [ 1, 'OK', 99, true ]

// Exemplo 3:

const pessoas = [
    { nome: 'João',   idade: 18 },
    { nome: 'Maria',  idade: 17 },
    { nome: 'Carlos', idade: 15 },
    { nome: 'Ana',    idade: 22 },
];

const pessoasMaiorDeIdade = pessoas.filter(function(pessoa) {
    return pessoa.idade >= 18
});

console.log(pessoasMaiorDeIdade) // [ { nome: 'João', idade: 18 }, { nome: 'Ana', idade: 22 } ]