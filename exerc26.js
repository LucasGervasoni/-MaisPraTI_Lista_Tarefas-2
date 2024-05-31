function matrizProduto(){
    const LINHASA = 3;
    const COLUNASA = 5;
    const LINHASB = 3;
    const COLUNASB = 5;

    let a = [];
    let b = [];

    for (let i = 0; i < LINHASA; i++) {
        a[i] = [];
        for (let j = 0; j < COLUNASA; j++) {
            a[i][j] = (i + 1) * (j + 1);
        }
    }

    for (let i = 0; i < LINHASB; i++) {
        b[i] = [];
        for (let j = 0; j < COLUNASB; j++) {
            b[i][j] = (i + 1) * (j + 1);
        }
    }
    for (let i = 0; i < LINHASA; i++) {
        let p = "";
        for (let j = 0; j < COLUNASA; j++) {
            p += (a[i][j] * b[i][j]) + " ";
        }
        console.log(p);
    }
 }

 console.log(matrizProduto())