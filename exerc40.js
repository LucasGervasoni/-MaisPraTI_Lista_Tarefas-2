const prompt = require('prompt-sync')();

function loteria(){
    const MAX = 5;
    let vetorAposta = [];
    console.log("Gabarito da Loteria:");
    for(let i = 0; i < MAX; i++){        
        vetorAposta.push(parseInt(prompt("Valor: ")));
    }

    let apostaLoteria;
    for(let i = 0; i < 50; i++){
        apostaLoteria = [];
        console.log(`Aposta jogador ${i+1}: `);
        for(let j = 0; j < MAX; j++){
            apostaLoteria.push(parseInt(prompt(`Informe a ${i + 1} aposta:`)));
        }
        console.log(`Aposta ${i}: ${apostaLoteria}`);

        let ganhadorLoteria = true;
        for(let k = 0; k < MAX; k++) {
            if(apostaLoteria[k]!== vetorAposta[k]){
                ganhadorLoteria = false;
                break;
            }
        }
        if(ganhadorLoteria){
            console.log("GANHADOR");
        }
    }
}

console.log(loteria())