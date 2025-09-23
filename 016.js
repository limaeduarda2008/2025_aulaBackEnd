//anônimo
const calcularRaio = function(circunferencia) {
    let pi = calcularPi();
    let raio = circunferencia / (2 * pi);
    return raio;
};

let circ = 50;
console.log("Valor de pi:", calcularPi());
console.log("Raio da circunferência de", circ, "é:", calcularRaio(circ));


//arrow
const calcularRaio2 = (circunferencia) => {
    let pi2 = calcularPi2();
    let raio2 = circunferencia / (2 * pi2);
    return raio2;
};

let circ2 = 50;
console.log("Valor de pi:", calcularPi2());
console.log("Raio da circunferência de", circ2, "é:", calcularRaio2(circ2));

