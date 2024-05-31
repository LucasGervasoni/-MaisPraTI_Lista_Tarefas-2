function inventario() {
    let lojaA = { mouse: 5, teclado: 3, monitor: 5 };
    let lojaB = { mouse: 10, teclado: 4, monitor: 6};
    let lojaAB = {};
  
    lojaAB = juntarLojas(lojaA, lojaB);
  
    console.log(lojaAB);
  }
  function juntarLojas(lojaA, lojaB) {
    let lojaAB = { ...lojaA };
  
    for (let element in lojaB) {
      if (lojaAB[element]) {
        lojaAB[element] += lojaB[element];
      } else {
        lojaAB[element] = lojaB[element];
      }
    }
    return lojaAB;
  }

console.log(inventario())