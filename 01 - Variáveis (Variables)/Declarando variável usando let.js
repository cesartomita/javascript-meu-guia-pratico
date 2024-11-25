// O escopo de let é de bloco.
// Isso significa que só é acessível dentro do bloco em que foi declarado (ex.: dentro de '{}').

// exemplo 1
if (true) {
    let x = 10;
    console.log(x); // 10
};
console.log(x); // x is not defined

// exemplo 2
for (let i = 0; i < 5; i++) {
    console.log(i); // 0, 1, 2, 3, 4
    let y = 20;
    console.log(y); // 20, 20, 20, 20, 20
};
console.log(i); // i is not defined
console.log(y); // y is not defined

// exemplo 3
console.log(z); // Cannot access 'z' before initialization 
let z = 1;