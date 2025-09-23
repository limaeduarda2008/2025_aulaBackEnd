//anônimo
const calcularAreaTriangulo = function(altura, largura) {
    let area = (altura * largura) / 2;
    return area;
};

console.log(calcularAreaTriangulo(10, 5));


//arrow
const calcularAreaTriangulo2 = (altura, largura) => (altura * largura) / 2;

console.log(calcularAreaTriangulo2(10, 5));
