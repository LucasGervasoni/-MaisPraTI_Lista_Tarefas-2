function vetorC(){
    const LINHAS = 6;
    const COLUNAS = 8;

    let m = [];
    for (let i = 0; i < LINHAS; i++) {
        m[i] = [];
        for (let j = 0; j < COLUNAS; j++) {
            m[i][j] = Math.floor(Math.random() * 101) - 50;
        }
    }

    c = [];
    for (let i = 0; i < LINHAS; i++) {
        numNegativo = 0;
        for(let j = 0; j < COLUNAS; j++) {
            if(m[i][j] < 0) {
                numNegativo++;
            }
        }
        c.push(numNegativo);
    }
    c = numNegativo;
    
    console.log("Matriz M:");
    console.log(m);
    console.log(`Quantidade de negativos em cada linha: ${c}`);
}

console.log(vetorC())