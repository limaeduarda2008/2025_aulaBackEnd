let varialvelGlobal = "Sou global";

function minhaFuncao() { 
    let variavelLocal = "Sou local"
    console.log(varialvelGlobal); // acessa a variável global
    console.log(variavelLocal);  // acessa a variável local
}

minhaFuncao();
console.log(varialvelGlobal); // acessa a ariavel global
console.log(varialvelLocal); // erro, variavelLocal não existe 
