const prompt = require('prompt-sync')();

function peopleAge(){
    let peoples = [];
    let ages = [];
    for(let i = 0; i < 9; i++){
        let name = prompt("Insira seu nome: ");
        let age = parseInt(prompt("Insira sua idade: "))
        peoples.push(name);
        ages.push(age);
    }
    for(let i = 0; i < 9; i++){
        if(ages[i] < 18){
            console.log(`Nome: ${peoples[i]} \nIdade: ${ages[i]}\n`)
        }
    }
}

console.log(peopleAge())