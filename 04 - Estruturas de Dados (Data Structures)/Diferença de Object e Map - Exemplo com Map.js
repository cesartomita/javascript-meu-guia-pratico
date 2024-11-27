/*
* Referências preservadas: O Map armazena cada objeto como referência, sem convertê-los para strings. Isso significa que você pode usar múltiplos objetos como chaves sem conflitos.
* Flexibilidade: Ele permite chaves de qualquer tipo (objetos, arrays, funções, etc.), enquanto o objeto só funciona corretamente com strings e Symbol.
*/

const armario = new Map();

const carrinho = { tipo: "brinquedo" };
const boneca = { tipo: "boneca" };
const lego = { tipo: "lego" };

// Adicionando itens à caixa mágica
armario.set(carrinho, "Carrinho de Controle Remoto");
armario.set(boneca, "Boneca Barbie");
armario.set(lego, "Blocos de Lego");

// Acessando os itens
console.log(armario.get(carrinho)); // "Carrinho de Controle Remoto"
console.log(armario.get(boneca));   // "Boneca Barbie"
console.log(armario.get(lego));     // "Blocos de Lego"

// Inspecionando a caixa mágica
console.log(armario);
// Map(3) { { tipo: 'brinquedo' } => 'Carrinho de Controle Remoto',
//          { tipo: 'boneca' } => 'Boneca Barbie',
//          { tipo: 'lego' } => 'Blocos de Lego' }