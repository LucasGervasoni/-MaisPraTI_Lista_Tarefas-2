const prompt = require('prompt-sync')();

function pessoa(){
    const objectPessoa = {
        name: prompt("Insira seu nome: "),
        age: parseInt(prompt("Insira sua idade: ")),
        email: prompt("Insira seu endereço de email: ")
    };
    console.log(`\nNome: ${objectPessoa.name}\nIdade: ${objectPessoa.age}\nEmail: ${objectPessoa.email}`);
}

console.log(pessoa())