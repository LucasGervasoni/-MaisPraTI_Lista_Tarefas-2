function array() {
    let object = [
      { vendedor: "Fabricio", valor: 200 },
      { vendedor: "Luana", valor: 300 },
      { vendedor: "Renan", valor: 500 },
      { vendedor: "Luana", valor: 110 },
      { vendedor: "Renan", valor: 30 },
    ];

    let totalValor = [];

    totalValor = object.reduce((valorSoma, valor) => {
      if (!valorSoma[valor.vendedor]) valorSoma[valor.vendedor] = 0;
  
      valorSoma[valor.vendedor] += valor.valor;
      return valorSoma;
    }, {});
  
    for (valores in totalValor) {
      console.log(`${valores}: ${totalValor[valores]}`);
    }
    return;
  }

console.log(array())
