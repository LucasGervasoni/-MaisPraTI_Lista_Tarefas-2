function object(object, acao) {
  let objectNumbers = {};

  for (let number in object) {
    objectNumbers[number] = acao(object[number]);
  }

  return objectNumbers;
}

let objectInicial = {
  '1': 38,
  '2': 24,
  '3': 17,
  '4': 89,
};

function sum(valor) {
  return valor + 40;
}

let objNew = object(objectInicial, sum);
console.log(objNew);