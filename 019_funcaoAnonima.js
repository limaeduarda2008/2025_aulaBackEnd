//função que não tem nome - função anônima
//armazenada em variável - função anônima
//passada diretamente como argumento de outra função - função anônima

//exemplo de função tradicional - função nomeada
function saudacao(nome){
    console.log(`tenha um bom dia ${nome}`);
}
saudacao("Maria");

//exemplo de função anônima
const saudacaoAnonima = function(){
    console.log("Olá, estou aprendendo sobre a função anônima");
}

//outro exemplo de função anônima 
const somar = function(nr1, nr2) {
    return nr1 + nr2;
};

console.log(somar(5, 3)); 


