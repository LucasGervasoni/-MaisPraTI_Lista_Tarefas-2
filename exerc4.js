const prompt = require('prompt-sync')();

function triangle(A,B,C){
    A = parseInt(prompt(`Insira o tamanho do segmento 1: `));
    B = parseInt(prompt(`Insira o tamanho do segmento 2: `));
    C = parseInt(prompt(`Insira o tamanho do segmento 3: `));

    if (A+B > C && A+C > B && B+C > A){
        return "É possível formar um triângulo"
    }else{
        return "Não é possível formar um triângulo"
    }
}

console.log(triangle());