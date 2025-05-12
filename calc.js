const calculadora = (a, b, operador) => {
    switch (operador) {
        case '+':
            return a + b;
        case '-':
            return a - b;
        case '*':
            return a * b;
        case '/':
            return b === 0 ? 'Erro: divisão por zero.' : a / b;
        default:
            return 'Operador inválido.';
    }
};

console.log(calculadora(8, 2, '*'));
console.log(calculadora(8, 0, '/'));
