const prompt = require('prompt-sync')();

function numberEven(){
    let number;
    let numbers = []
    let position = []
    for(let i = 1; i <= 10; i++){
        number = parseInt(prompt(`Insira o ${i} número: `));
        numbers.push(number);
    }
    for( let j = 0; j<= numbers.length; j++){
        if(numbers[j] % 2 === 0){
            console.log(numbers[j])
            position.push(j)
        }
    }
    console.log(position)
}

console.log(numberEven())