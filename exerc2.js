const prompt = require('prompt-sync')();

// let carSpeed = parseInt(prompt("Qual foi a sua velocidade no momento da multa: "));

// if (carSpeed > 80){
//     let traffic = (carSpeed - 80) * 5;
//     console.log(`Você foi multado por excesso de velocidade. Sua multa foi de R$${traffic} reais`);
// }else{
//     console.log("Você está dentro do limite da pista")
// }
// ======================================================================

function speedAbove(speed){
    speed = prompt("Insira a distância em KM: ");
    if (speed > 80){
        let traffic = (speed - 80) * 5;
        return `Você foi multado por excesso de velocidade. Sua multa foi de R$${traffic} reais`;
    }else{
        return "Você está dentro do limite da pista"
    }
}

// car = speedAbove(200);
console.log(speedAbove());