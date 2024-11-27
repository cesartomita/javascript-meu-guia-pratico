/*
* Quando usamos objetos como chaves no armario (um objeto JavaScript), todas as chaves são convertidas para strings.
* O JavaScript converte qualquer objeto para a string "[object Object]". Como resultado, todas as chaves se sobrescrevem.
*/

const armario = {};

const carrinho = { tipo: "brinquedo" };
const boneca = { tipo: "boneca" };
const lego = { tipo: "lego" };

// Adicionando itens ao armário
armario[carrinho] = "Carrinho de Controle Remoto";
armario[boneca] = "Boneca Barbie";
armario[lego] = "Blocos de Lego";

// Tentando acessar os itens
console.log(armario[carrinho]); // "Blocos de Lego"
console.log(armario[boneca]);   // "Blocos de Lego"
console.log(armario[lego]);     // "Blocos de Lego"

// Inspecionando o objeto
console.log(armario); // { '[object Object]': 'Blocos de Lego' }