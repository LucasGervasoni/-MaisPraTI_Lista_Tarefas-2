
function pesoIdeal(alt, sex){
    function calPeso(alt, sex){
        let peso;
        if(sex === 'masculino'){
            peso = (72.7 * alt) - 58;
        }else if(sex === 'feminino'){
            peso = (62.1 * alt) - 44.7;
        }else{
            return "Sexo não reconhecido. Insira 'masculino' ou 'feminimo'";
        }
        return peso;
    }

    const pesoCal = calPeso(alt, sex);
    console.log("Peso ideal: " + pesoCal.toFixed(2));
}

// console.log(pesoIdeal(1.70,"masculino"));