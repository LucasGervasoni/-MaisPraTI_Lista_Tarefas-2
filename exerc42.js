const objectDados = {
    name: 'Lucas',
    age: 19,
    phone: ['219999999', '21999888'],
    fruits: ['maçã','banana']
};

function elementObject(elements) {
    let newObjectDados = {};

    for (let element in elements) {
        if (Array.isArray(elements[element])) {
        newObjectDados[element] = elements[element];
        }
    }

    return newObjectDados;
}

let a = elementObject(objectDados);

console.log(a);