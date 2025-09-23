function calcularPi() {
    let pi = 3.141592653589793;
    return pi; 
}

console.log(calcularPi());

function calcularRaio(circunferencia) {
    let pi = calcularPi(); 
    let raio = circunferencia / (2 * pi);
    return raio;
}


let circ = 50;
console.log("Valor de pi:", calcularPi());
console.log("Raio da circunferência de", circ, "é:", calcularRaio(circ));
