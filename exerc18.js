const prompt = require('prompt-sync')();

function register(){
    let funcionario = {
        name: "",
        position: "",
        salary: 0
    };
    funcionario.name = prompt("Insira seu nome: ");
    funcionario.position = prompt("Insira seu cargo: ");
    funcionario.salary = parseInt(prompt("Insira seu salário: "));

    console.log("----REGISTRO----");
    console.log(`Nome: ${funcionario.name} \nCargo: ${funcionario.position} \nSalário: R$${funcionario.salary}`);
}

console.log(register())