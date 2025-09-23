//função que retorna a resposta par aquem perguntou 

function calcularComissao(valor, percComissao){
    let comissao = valor * (percComissao / 100); 
    return comissao;
}

let comissaoRetornada;
comissaoRetornada = calcularComissao(2500, 3);



//caso queira calcular ja tendo umsalario
//let salario = 3000;
// salario = salario + comissaoRetornada;
//console.log(`o salário final é de R$${salario},00`);