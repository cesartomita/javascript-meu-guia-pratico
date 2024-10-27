class Carro {

    constructor(marca, modelo, ano, preco) {

        this.marca = marca,
        this.modelo = modelo,
        this.ano = ano,
        this.preco = preco

        this.calcularIpva = function(porcentagem) {
            return `O valor do IPVA é: ${this.preco * (porcentagem/100)}`
        };

    };

    mostrarInfo() {
        return `${this.marca} ${this.modelo} - ${this.ano}`
    };

    calcularIdade() {
        const anoAtual = new Date().getFullYear();
        return `O carro tem ${anoAtual - this.ano} anos de idade`;
    };
};

const meuCarro = new Carro("Toyota", "Corolla", 2008, 28000);

console.log(meuCarro.mostrarInfo()); // 'Toyota Corolla - 2008'
console.log(meuCarro.calcularIdade()); // 'O carro tem 16 anos de idade'
console.log(meuCarro.calcularIpva(5)); // 'O valor do IPVA é: 1400'