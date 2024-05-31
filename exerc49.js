function arrayTransacoes() {
    let transacoesFinanceiras = [
      { id: 1, valor: 200, data: "13-06-24", categoria: "transporte" },
      { id: 2, valor: 250, data: "14-06-24", categoria: "transporte" },
      { id: 3, valor: 100, data: "15-06-24", categoria: "comida" },
      { id: 4, valor: 230, data: "16-06-24", categoria: "aluguel" },
      { id: 5, valor: 120, data: "17-06-24", categoria: "comida" },
      { id: 6, valor: 900, data: "18-06-94", categoria: "transporte" },
    ];
    let Categoria = [];
    Categoria = object(transacoesFinanceiras);
  
    console.log(Categoria);
  
    return;
  }
  function object(objeto) {
    let newObject = {};

    newObject = objeto.reduce((valorSoma, valor) => {
      if (valorSoma[valor.categoria]) {
        valorSoma[valor.categoria].subtotal += valor.valor;
      } else {
        valorSoma[valor.categoria] = [];
        valorSoma[valor.categoria].subtotal = valor.valor;
      }
      valorSoma[valor.categoria].push(valor);
  
      return valorSoma;
    }, {});
    return newObject;
  }

console.log(arrayTransacoes())