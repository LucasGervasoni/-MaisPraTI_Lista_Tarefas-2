const prompt = require('prompt-sync')();

// let qtdCigaretts = parseInt(prompt("Quantos cigarros você fuma por dia? "));
// let yearsTotal = parseInt(prompt("Quantos anos você tem fumado? "));
// let daysLost;

// if (yearsTotal === 1){
//     daysLost = (qtdCigaretts * 365 * 10) / 1440;
// }else{
//     let yearsToDays = yearsTotal * 365;
//     daysLost = (yearsToDays * qtdCigaretts * 10) / 1440;
// }

// console.log(`Você fuma por dia ${qtdCigaretts} cigarros, por ${yearsTotal} anos, e você perdeu ${Math.ceil(daysLost)} dias de vida`);

// =========================================================================================================
// The same code above, but in function


function dayLost(qtdCigaretts,yearsTotal){
    qtdCigaretts = parseInt(prompt("Quantos cigarros você fuma por dia? "));
    yearsTotal = parseInt(prompt("Quantos anos você tem fumado? "));
    let daysLost;
    let yearsToDays;
    if (yearsTotal === 1){
        daysLost = Math.ceil((qtdCigaretts * 365 * 10) / 1440);
    }else{
        yearsToDays = yearsTotal * 365;
        daysLost = Math.ceil((yearsToDays * qtdCigaretts * 10) / 1440);
    }
    return `Você perdeu ${Math.ceil(daysLost)} dias de vida`;
}

console.log(dayLost());