function guessingGame(){
    user = 3;
    computer = Math.floor(Math.random() * (6 - 1) + 1);
    console.log(computer)
    if(user > computer){
        return "O número é menor"
    }else if(user < computer){
        return "O número é maior"
    }else{
        return "Você acertou. PARABÉNS!!"
    }
}

console.log(guessingGame());
