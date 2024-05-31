const prompt = require('prompt-sync')();

function lifeFit(){
    hours = parseInt(prompt("Digite as horas de atividade física que você fez nesse mês: "));
    if(hours <= 10){
        points = hours * 2;
    }else if(hours > 10 && hours <= 20){
        points = hours * 5;
    }else{
        points = hours * 10;
    }
    bill = points * 0.05;
    return `Você realizou ${hours} horas de atividade física, ganhou ${points} pontos e R$ ${bill.toFixed(2)}`
}

console.log(lifeFit());