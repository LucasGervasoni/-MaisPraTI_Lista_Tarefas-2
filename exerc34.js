function matriz(){
    const LINHAS = 50; 
    const COLUNAS = 50; 

    let matriz = [];

    for(let i = 0; i < LINHAS; i++){
        matriz[i] = [];
        for(let j = 0; j < COLUNAS; j++){
            matriz[i][j] = Math.random() * 100;
        }
    }

    console.log(`Matriz: `);
    for(let i = 0; i < matriz.length; i++){
        let aux = "";
        for(let j = 0; j < matriz.length; j++){
            aux += matriz[i][j].toFixed(2) + " ";
        }
        console.log(aux);
    }
    
    for(let i = 0; i < LINHAS; i++) {
        const elementDiagonal = matriz[i][i]; 
        for(let j = 0; j < COLUNAS; j++) {
            matriz[i][j] *= elementDiagonal;
        }
    }

    console.log(`Matriz modificada: `);
    for(let i = 0; i < matriz.length; i++) {
        let aux = "";
        for(let j = 0; j < matriz[i].length; j++) {
            aux += matriz[i][j].toFixed(2) + " ";
        }
        console.log(aux);
    }
}

console.log(matriz())