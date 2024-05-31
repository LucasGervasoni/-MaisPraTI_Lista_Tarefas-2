function matriz(){
    const LINHAS = 5; 
    const COLUNAS = 5;

    let matriz = [];

    for(let i = 0; i < LINHAS; i++){
        matriz[i] = [];
        for(let j = 0; j < COLUNAS; j++){
            matriz[i][j] = (i + 1) * (j + 1);
        }
    }
    console.log(`\nMatriz 5x5: \n`);
    for(let i = 0; i < matriz.length; i++){
        let aux = "";
        for(let j = 0; j < matriz.length; j++){
            aux += matriz[i][j] + " ";
        }
        console.log(aux);
    }
    let vetorSL = [];
    let vetorSC = [];

    for(let i = 0; i < LINHAS; i++){
        let somaLinha = 0;
        for(let j = 0; j < matriz.length; j++){
            somaLinha += matriz[i][j];
        }
        vetorSL.push(somaLinha);
    }
    for(let i = 0; i < LINHAS; i++){
        let somaColuna = 0;
        for(let j = 0; j < matriz.length; j++){
            somaColuna += matriz[j][i];
        }
        vetorSC.push(somaColuna);
    }
    console.log(`Soma de linhas: ${vetorSL}`);
    console.log(`Soma de colunas: ${vetorSC}`);
}

console.log(matriz())