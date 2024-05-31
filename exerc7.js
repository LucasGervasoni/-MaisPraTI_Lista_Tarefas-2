const prompt = require('prompt-sync')();

function rentCar(){
    model = parseInt(prompt("Escolha um modelo: 1.Popular || 2.Luxo "));
    days = parseInt(prompt("Quantos dias de aluguel: "));
    km = parseInt(prompt("Quantos KM foram percorridos: "));
    price = 0;

    switch(model){
        case 1:
            if(km <= 100){
                price = (days * 90) + (km * 0.20);
            }else{
                price = (days * 90) + (km * 0.10);
            }
            break;
        case 2:
            if(km <= 200){
                price = (days * 150) + (km * 0.30);
            }else{
                price = (days * 150) + (km * 0.25);
            }
            break;
        default:
            return "Opção inválida";
            break;
    }
    console.log(`O valor a ser pago será de: R$ ${price}`)
}

console.log(rentCar())


