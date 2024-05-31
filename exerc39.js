function matriz(){
    const MAX = 100;
    let vetorA = [];
    let vetorB = []

    for(let i = 0; i < MAX; i++){
        let elementosVetor = Math.floor(Math.random() * 200) - 100; 
        vetorA.push(elementosVetor);
    }
    for (let index = vetorA.length - 1; index >= 0; index--) {
        if (vetorA[index] <= 0) {
          vetorB.push(vetorA[index]);
          vetorA.splice(index, 1);
        }
      }
      console.log("Vetor A: ");
      vetorA.forEach((elemento) => {
        console.log(elemento);
      });
      console.log("Vetor B: ");
      vetorB.forEach((elemento) => {
        console.log(elemento);
      });
      return;
}

console.log(matriz())

