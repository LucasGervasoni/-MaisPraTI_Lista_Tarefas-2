const prompt = require('prompt-sync')();

function folhaDePagamento(){
    let funcionarios = []; 

    let descontoINSS = 0.12;

    for(let i = 0; i < 80; i++){
        let funcionario = {
            matricula: parseFloat(prompt("Matrícula: ")),
            nome: prompt("Nome: "),
            salario_bruto: parseFloat(prompt("Salário bruto: R$"))
        };

        let salario_liquido = funcionario.salario_bruto * (1 - descontoINSS);

        funcionarios.push(funcionario);

        console.log(`-- Funcionário ${i} --`);
        console.log("Matrícula:", funcionario.matricula);
        console.log("Nome:", funcionario.nome);
        console.log("Salário bruto: R$", funcionario.salario_bruto);
        console.log("Desconto INSS: R$", funcionario.salario_bruto * descontoINSS);
        console.log("Salário líquido: R$", salario_liquido);
        console.log("-------------------------");
    }
    console.log(funcionarios);
}

console.log(folhaDePagamento());