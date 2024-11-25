// O escopo de var é global ou de função. Se for declarado fora de uma função,
// estará acessível em qualquer lugar do código, inclusive fora de blocos como if ou for.

// exemplo 1
if (true) {
    var x = 10;
};
console.log(x); // 10

// exemplo 2
for (var i = 0; i < 5; i++) {
    console.log(i); // 0, 1, 2, 3, 4
    var y = 20;
};
console.log(i); // 5
console.log(y); // 20

// exemplo 3
console.log(z); // undefined
var z = 1;
console.log(z); // 1