// Assim como let, tem escopo de bloco.
// A referência de uma variável declarada com const não pode ser alterada.
// Isso significa que você não pode reatribuir um novo valor, mas pode modificar objetos e arrays que ela referencia.

// exemplo 1
const x = 99;
x = 100; // Assignment to constant variable. 

// exemplo 2
const arr = ['a', 'b', 'c'];
arr.push('d');
console.log(arr); // [ 'a', 'b', 'c', 'd' ]

// exemplo 3
const obj = {x: 10, y: 20};
obj.z = 30;
console.log(obj); // { x: 10, y: 20, z: 30 }

const obj2 = {a: 1, b: 2};
obj2['c'] = 3;
console.log(obj2); // { a: 1, b: 2, c: 3 }

// exemplo 4
const obj3 = {abc: 123};
Object.assign(obj3, {def: 456});
console.log(obj3); // { abc: 123, def: 456 }