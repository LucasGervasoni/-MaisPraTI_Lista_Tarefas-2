const prompt = require('prompt-sync')();

function pesquisaHab(){
    let escolha = 0;
    let cont = 0;
    let ate = 0;
    let media = 0;
    let mediaFilhos = 0;
    let maior = 0;

    do{
        salario = parseFloat(prompt("Insira seu salário: "));
        filhos = parseInt(prompt("Insira a quantidade de filhos: "));

        if(salario <= 350){
            ate++;
        }
        media += salario;
        mediaFilhos += filhos;

        if(salario > maior){
            maior = salario;
        }
        cont++;
        parar = parseInt(prompt("Digite 1 para continuar: "));

    }while(escolha === 1);

    if(cont > 0){
        console.log(`\nMédia salarial: ${media/cont}`);    
        console.log(`Média de filhos: ${mediaFilhos / cont}`);  
        console.log(`Maior salário: ${maior}`);
        console.log(`Percentual de pessoal com salários até R$ 350,00: ${ate/cont * 100}%`);
    }
}

console.log(pesquisaHab())