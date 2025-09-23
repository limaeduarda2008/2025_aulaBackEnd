//para utilizar biblioteca/pacote usamos o prompt 
const prompt = require('prompt-sync')();

let nome = prompt('Qual é o seu nome? ');
console.log(`Seja bem-vindo(a), ${nome}!`);

let Anonascimento = prompt(`${nome}, qual é seu ano de nascimento? `);
let idade = 2025 - Anonascimento;        //convertendo para number - parseInt(Anonascimento)
// para pegar o ano atual sem precisar digitar - let anoAtual = new Date().getFullYear(); 
let fezAniversario = prompt(`Você já fez aniversário esse ano, ${nome}? `);
if (fezAniversario != 'Sim') {
    idade--; 
}
console.log(`${nome}, sua idade é ${idade} ❤`);
