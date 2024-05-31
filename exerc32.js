function matriz(){
    const LINHAS = 12; 
    const COLUNAS = 13;

    let matriz = [];

    for(let i = 0; i < LINHAS; i++){
        matriz[i] = [];

        for(let j = 0; j < COLUNAS; j++){
            matriz[i][j] = (i + 1) * (j + 1);
        }
    }

    function maiorElemento(linha) {
        let maior = linha[0];

        for (let i = 1; i < linha.length; i++) {
            if (Math.abs(linha[i]) > Math.abs(maior)) {
                maior = linha[i];
            }
        }
        return Math.abs(maior);
    }
    
    for(let i = 0; i < matriz.length; i++){
        const MAIOR = maiorElemento(matriz[i]);

        for(let j = 0; j < COLUNAS; j++){
            matriz[i][j] /= MAIOR;
            matriz[i][j] = matriz[i][j].toFixed(1);
        }
    }

    console.log("Matriz: ");
    for (let i = 0; i < LINHAS; i++) {
        let linhasM = "";
        for(let j = 0; j < matriz.length; j++) {
            linhasM += matriz[i][j]; 
        }
    }

    console.log("\nMatriz modificada:");
    for (let i = 0; i < LINHAS; i++) {
        let linhasN = "";
        for(let j = 0; j < matriz.length; j++) {
            linhasN += matriz[i][j];
        }
        console.log(linhasN);
    }
}

console.log(matriz())