const prompt = require('prompt-sync')();

// let passanger = prompt("Insira a distância em KM: ");
// let priceKm = 0;

// if (passanger <= 200){
//     priceKm = passanger * 0.50;
// }else{
//     priceKm = passanger * 0.45;
// }

// console.log(`O Passageiro fará uma viagem de ${passanger}KM que custará R$${priceKm} reais`);

// ===========================================================
function Trip(KM){
    KM = prompt("Insira a distância em KM: ");
    let priceKM = 0;
    if (KM <= 200){
        priceKM = KM * 0.50;
    }else{
        priceKM = KM * 0.45;
    }
    return `O Passageiro fará uma viagem de ${KM}KM que custará R$${priceKM} reais`
}

console.log(Trip())
