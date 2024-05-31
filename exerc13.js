const prompt = require('prompt-sync')();

function fibonacciVetor(){
    const TERMOS = parseInt(prompt("Insira o limite de termos da sequência: "));
    let primeiroTermo = 0;
    let segundoTermo = 1;
    let soma = 0;
    let fibo = [];
    for (let i = 1; i <= TERMOS; i++) {
        if (i <= 1) {
            soma = i;
        } else {
            soma = primeiroTermo + segundoTermo;
            primeiroTermo = segundoTermo;
            segundoTermo = soma;
        }
        fibo.push(soma);
    }
    console.log(fibo);
}
console.log(fibonacciVetor())
