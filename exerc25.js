function matriz(){
    const LINHAS = 15;
    const COLUNAS = 20;

    let matriz = [];

    for (let i = 0; i < LINHAS; i++) {
        matriz[i] = [];

        for (let j = 0; j < COLUNAS; j++) {
            matriz[i][j] = (i + 1) * (j + 1);
        }
    }

    matrizSoma = [];
    
    for (let j = 0; j < COLUNAS; j++) {
        soma = 0;
        for(let i = 0; i < LINHAS; i++) {
            soma += matriz[i][j];
        }
        matrizSoma.push(soma);
    }
    console.log(matrizSoma);
}

console.log(matriz())