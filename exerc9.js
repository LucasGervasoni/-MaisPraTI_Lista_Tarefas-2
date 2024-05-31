const prompt = require('prompt-sync')();

function job(){
    choice = "n"
    salaryTotalM = 0;
    salaryTotalH = 0;
    do{
        salary = parseInt(prompt("Digite seu salário atual: R$  "));
        gender = prompt("Digite seu gênero: (H/M)").toLowerCase();
        if(gender === 'm'){
            salaryTotalM += salary;
        }else if(gender === "h"){
            salaryTotalH += salary;
            console.log(salaryTotalH)
        }else{
            return "Opção inválida"
        }
        choice = prompt("Quer continuar: (s) - Sim | (n) - Não ").toLowerCase();
    }while(choice === "s")

    console.log
    (`Gênero ============== Total========
    Homens:             R$ ${salaryTotalH}
    Mulheres:           R$ ${salaryTotalM}`)
}

console.log(job());

