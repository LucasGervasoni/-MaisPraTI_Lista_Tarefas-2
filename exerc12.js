function fibonacci(n) {
    if (n <= 1) {
        return n;
    } else {
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
}

// Exemplo de uso
for (let i = 1; i < 11; i++) {   
    console.log(fibonacci(i));
}