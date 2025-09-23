//function nome da função(){
//console.log();
// }
//referência para executar a função 

function BemVindo(){
    console.log('❤ ❤ ❤ ❤ ❤ ❤ ❤ ❤ ❤ ❤ ');
    console.log('Bem-vindo(a) à UC Backend');
    console.log('❤ ❤ ❤ ❤ ❤ ❤ ❤ ❤ ❤ ❤ ');
}

for (let n = 1; n <= 200; n++) {
    BemVindo();
}

function multiplicar(n1, n2){
    let resultado = n1 * n2;
    return resultado;
}
 
let res = multiplicar(2, 7);
console.log(`O resultado é ${res} `);
console.log(multiplicar(5, 9));

