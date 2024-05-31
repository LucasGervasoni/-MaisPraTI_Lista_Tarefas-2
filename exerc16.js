function sortNumbers(){
    let number;
    let numbers = [];

    for(let i = 0; i < 20; i++){
        number = Math.floor(Math.random() * (99 - 0) + 0);
        numbers.push(number);
    }
    console.log(`Ordem normal: ${numbers}`);
    console.log(`Ordem crescente: ${numbers.sort((a, b) => a - b)}`);
}

console.log(sortNumbers());