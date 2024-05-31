const prompt = require('prompt-sync')();

// let userChoice = prompt("1. Pedra || 2. Papel || 3. Tesoura ");

// let computerChoice = Math.floor(Math.random() * (3 - 1) + 1);

// if(userChoice == computerChoice){
//     console.log("DRAW");
// }else if(userChoice == 2 && computerChoice == 1 || userChoice == 1 && computerChoice == 3 || userChoice == 3 && computerChoice == 2){
//     console.log("User WIN");
// }else if(computerChoice == 2 && userChoice == 1 || computerChoice == 1 && userChoice == 3 || computerChoice == 3 && userChoice == 2){
//     console.log("Computer WIN");
// }else{
//     console.log("Error: option invalid")
// }
// ===============================================================================

function jokenPo(userChoice){
    userChoice = prompt("1. Pedra || 2. Papel || 3. Tesoura ");
    let computerChoice = Math.floor(Math.random() * (3 - 1) + 1);
    if(userChoice == computerChoice){
        return `O usuário escolheu ${userChoice} e o computador escolheu ${computerChoice}. DRAW`
    }else if(userChoice == 2 && computerChoice == 1 || userChoice == 1 && computerChoice == 3 || userChoice == 3 && computerChoice == 2){
        return `O usuário escolheu ${userChoice} e o computador escolheu ${computerChoice}. User WIN`
    }else if(computerChoice == 2 && userChoice == 1 || computerChoice == 1 && userChoice == 3 || computerChoice == 3 && userChoice == 2){
        return `O usuário escolheu ${userChoice} e o computador escolheu ${computerChoice}. Computer WIN`

    }else{
        return "Error: option invalid"
    }
}

console.log(jokenPo());