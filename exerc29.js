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
    console.log(`\nMatriz: `);
    for(let i = 0; i < matriz.length; i++){
        let aux = "";
        for(let j = 0; j < matriz.length; j++){
            aux += matriz[i][j] + " ";
        }
        console.log(aux);
    }
    let somaLinha = 0;
    for(let i = 0; i < LINHAS; i++){
        somaLinha = 0;
        if(i == 3){
            somaLinha = 0;
            for(let j = 0; j < matriz.length; j++){
                somaLinha += matriz[i][j];
            }
            console.log(`\nSoma da linha 4: ${somaLinha}`);
        }
    }
    let somaColuna = 0;
    for(let i = 0; i < LINHAS; i++){
        somaColuna = 0;
        if(i == 1){
            somaColuna = 0;
            for(let j = 0; j < matriz.length; j++){
                somaColuna += matriz[j][i];
            }
            console.log(`\nSoma da coluna 2: ${somaColuna}`);
        }
    }
    let somaDiagonal = 0;
    for(let i = 0; i < LINHAS; i++){
        somaDiagonal = 0;
        if(i == 2){
            somaDiagonal = 0;
            for(let j = 0; j < matriz.length; j++){
                somaDiagonal += matriz[j][j];
            }
            console.log(`\nSoma da diagonal principal: ${somaDiagonal}`);
        }
    }
    let somaMatriz = 0;
    for(let i = 0; i < LINHAS; i++){
        somaMatriz = 0;
        if(i == 3){
            somaMatriz = 0;
            for(let j = 0; j < matriz.length; j++){
                somaMatriz += matriz[i][j];
            }
            console.log(`\nSoma da matriz: ${somaMatriz}`);
        }
    }
}

console.log(matriz())