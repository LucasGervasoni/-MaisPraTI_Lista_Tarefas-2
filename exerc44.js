function objectString() {
    let object = { 
        name: "Lucas", 
        age: 19, 
        phone: "219999999" 
    };
    let cont = 0;
  
    for (let element in object) {
      if (typeof object[element] === "string") cont++;
    }
    return console.log(`Numero de strings no objeto: ${cont}`);
  }

  console.log(objectString());