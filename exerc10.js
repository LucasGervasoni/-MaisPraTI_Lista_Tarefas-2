const prompt = require('prompt-sync')();

function numbers(){
    choice = 'n';
    sumNumbers = 0;
    minNumber = 0;
    average = 0;
    evenNumbers = 0;
    count = 1;
    do{
        number = parseInt(prompt("Digite um número: "));
        sumNumbers += number;
        average = sumNumbers / count
        if(number % 2 === 0){
            evenNumbers += 1;
        }
        if(minNumber === 0){
            minNumber = number;
        }else if(number < minNumber){
            minNumber = number;
        }
        count += 1;
        choice = prompt("Deseja continuar: (s) - Sim | (n) - Não").toLowerCase();
    }while(choice === 's')
    console.log(`Soma Total: ${sumNumbers} \nMenor valor digitado: ${minNumber} \nMédia: ${average.toFixed(2)} \nTotal de pares: ${evenNumbers}`
    )
}

console.log(numbers());