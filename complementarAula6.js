class carro {
    constructor(marca, modelo, anoCarro, cor) {
        this.marca = marca.toUpperCase();
        this.modelo = modelo.toLowerCase();
        this.anoCarro = Number(anoCarro);
        this.cor = cor;
    }

    idadeCarro(){
        this.idadeCarro = 2023 - this.anoCarro
    }
}

const opcoesDeCarro = []

opcoesDeCarro.push(new carro("Honda ", "Civic SI", 2009, "Vermelho"))
opcoesDeCarro.push(new carro("VW ", "Jetta TSI", 2011, "Branco"))
opcoesDeCarro.push(new carro("GM ", "Vectra GSI", 1995, "Verde"))
opcoesDeCarro.push(new carro("Subaru ", "STI", 2015, "Azul"))

for (const carro of opcoesDeCarro){
    carro.idadeCarro()
}

console.log("Nós temos " + opcoesDeCarro.length + " opções de carros")
console.log(opcoesDeCarro)