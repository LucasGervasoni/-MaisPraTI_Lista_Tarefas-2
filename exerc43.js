function mesclarObjetos() {
    let obj1 = { nome: "pericles", idade: 40 };
    let obj2 = { nome: "lucas", idade: "19" };
    let objetoUniao = {};
  
    objetoUniao = { ...obj1, ...obj2 };
  
    for (element in objetoUniao) {
      console.log(`${element}: ${objetoUniao[element]}`);
    }
    return;
  }
