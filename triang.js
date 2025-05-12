const classificarTriangulo = (lado1, lado2, lado3) => {
    if (lado1 <= 0 || lado2 <= 0 || lado3 <= 0) return 'Não é um triângulo';

    const soma1 = lado1 + lado2;
    const soma2 = lado1 + lado3;
    const soma3 = lado2 + lado3;

    if (soma1 <= lado3 || soma2 <= lado2 || soma3 <= lado1) return 'Não é um triângulo';

    if (lado1 === lado2 && lado2 === lado3) return 'Equilátero';
    if (lado1 === lado2 || lado1 === lado3 || lado2 === lado3) return 'Isósceles';
    
    return 'Escaleno';
};

console.log(classificarTriangulo(2, 2, 2));
console.log(classificarTriangulo(3, 4, 4));
console.log(classificarTriangulo(3, 4, 5));
console.log(classificarTriangulo(0, 0, 0));
console.log(classificarTriangulo(2, 4, 2));