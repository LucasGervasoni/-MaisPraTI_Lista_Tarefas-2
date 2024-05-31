const prompt = require('prompt-sync')();

function names(){
    let name;
    let listNames = []
    for(let i = 0; i < 7; i++){
        name = prompt("Digite seu nome: ");
        listNames.push(name);
    }
    console.log(listNames);
    console.log(listNames.reverse())
}

console.log(names());