const soma = (v1, v2) => v1 + v2;

const subtracao = (n1, n2) => n1 - n2;

const multiplicacao = (nr1, nr2) => nr1 * nr2;

const divisao = (num1, num2) => {
    if (b === 0) {
        return "erro: não existe divisão por zero";
    }
    return num1 / num2;
};

console.log("soma (10 + 5) =", soma(10, 5));
console.log("subtração (10 - 5) =", subtracao(10, 5));
console.log("multiplicação (10 * 5) =", multiplicacao(10, 5));
console.log("divisão (10 / 5) =", divisao(10, 5));
console.log("divisão por zero (10 / 0) =", divisao(10, 0));
