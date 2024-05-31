function matrizIdentidade(){
    const LINHAS = 7;
    const COLUNAS = 7;

    let matriz = [];

    for (let i = 0; i < LINHAS; i++) {
        matriz[i] = [];
        for (let j = 0; j < COLUNAS; j++) {
            matriz[i][j] = (i === j) ? 1 : 0;
        }
    }

    for (let i = 0; i < LINHAS; i++) {
        let linha = "";
        for (let j = 0; j < COLUNAS; j++) {
            linha += matriz[i][j] + " ";
        }
        console.log(linha);
    }
}

console.log(matrizIdentidade())