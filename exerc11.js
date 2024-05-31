const prompt = require('prompt-sync')();

function pa(){
    razao = parseInt(prompt("Isira a razão da PA: "));
    primeiroTermo = parseInt(prompt("Insira o primeiro termo da PA: "));
    soma = 0
    for(let i = 0; i < 10; i++){
        soma += primeiroTermo + (i * razao);
        console.log(`${primeiroTermo + (i * razao)}`);
    }
    console.log(`A soma dos termos da PA é de: ${soma}`);
}

console.log(pa())