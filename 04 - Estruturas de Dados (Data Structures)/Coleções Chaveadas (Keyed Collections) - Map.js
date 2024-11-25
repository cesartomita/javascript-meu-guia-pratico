// Inicializando um Map

const mapa = new Map();

// Adicionando elemento

mapa.set('nome', 'Maria');
mapa.set('idade', 35);
mapa.set('sexo', 'F');
mapa.set('dataNascimento', '1995-10-30');

// Imprimindo o mapa

console.log(mapa) // Map { 'nome': 'Maria', 'idade': 35, 'sexo': 'F', 'dataNascimento': '1995-10-30' }

// Retorna valor da chave

console.log(mapa.get('nome')) // Maria
console.log(mapa.get('telefone')) // Undefined

// Retorna o número total de pares chave-valor no mapa

console.log(mapa.size) // 4

// Verifica se uma chave existe no mapa

console.log(mapa.has('sexo')) // true
console.log(mapa.has('telefone')) // false

// Retorna um iterador com todas as chaves do mapa

const mapaChaves = mapa.keys();
console.log(mapaChaves); // [Map Iterator] { 'nome', 'idade', 'sexo', 'dataNascimento' }

const mapaChavesArr = [...mapa.keys()]
console.log(mapaChavesArr); // [ 'nome', 'idade', 'sexo', 'dataNascimento' ]

const mapaChavesArr2 = Array.from(mapa.keys())
console.log(mapaChavesArr2); // [ 'nome', 'idade', 'sexo', 'dataNascimento' ]

// Retorna um iterador com todos os valores do mapa

const mapaValores = mapa.values();
console.log(mapaValores); // [Map Iterator] { 'Maria', 35, 'F', '1995-10-30' }

const mapaValoresArr = [...mapa.values()]
console.log(mapaValoresArr); // [ 'Maria', 35, 'F', '1995-10-30' ]

const mapaValoresArr2 = Array.from(mapa.values())
console.log(mapaValoresArr2); // [ 'Maria', 35, 'F', '1995-10-30' ]

// Retorna um iterador com todos os pares chave-valor do mapa como arrays [chave, valor]

const mapaEntradas = mapa.entries();
console.log(mapaEntradas); // [Map Entries] { [ 'nome', 'Maria' ], [ 'idade', 35 ], [ 'sexo', 'F' ], [ 'dataNascimento', '1995-10-30' ] }

const mapaEntradassArr = [...mapa.entries()]
console.log(mapaEntradassArr); // [ [ 'nome', 'Maria' ], [ 'idade', 35 ], [ 'sexo', 'F' ], [ 'dataNascimento', '1995-10-30' ] ]

const mapaEntradasArr2 = Array.from(mapa.entries())
console.log(mapaEntradasArr2); // [ [ 'nome', 'Maria' ], [ 'idade', 35 ], [ 'sexo', 'F' ], [ 'dataNascimento', '1995-10-30' ] ]

// Executa uma função para cada par chave-valor no mapa.

mapa.forEach(function(valor, chave) {
    console.log(`Chave: ${chave}, Valor: ${valor}`);
});

mapa.forEach((valor, chave) => {
    console.log(`Chave: ${chave}, Valor: ${valor}`);
});

// Exemplo usando keys() com for

for (const chave of mapa.keys()) {
    console.log(chave)
};

// Remove um par chave-valor do mapa.

mapa.delete('dataNascimento');
console.log(mapa.has('dataNascimento')) // false

// Remove todos os pares chave-valor do mapa.

mapa.clear();
console.log(mapa.size) // 0
