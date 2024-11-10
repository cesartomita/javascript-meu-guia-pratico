const numeros = [2,4,6,8,10];

const soma = numeros.reduce(function(acc, num) {
    return acc + num;
}, 0);

console.log(soma);