//anônimo
const nomeCompleto = function(nome, sobrenome) {
    let completo = nome + sobrenome;
    console.log(`Oiee ${completo}, seja bem-vindo(a)!🥰`);
    return completo;
};

nomeCompleto("Maria", " Eduarda");
nomeCompleto("Kathiuce", " Barbosa");
nomeCompleto("Carina", " Messias");


//arrow 
const nomeCompleto2 = (nome, sobrenome) => {
    let completo2 = nome + sobrenome;
    console.log(`Oiee ${completo2}, seja bem-vindo(a)!🥰`);
    return completo2;
};

nomeCompleto2("Maria", " Eduarda");
nomeCompleto2("Kathiuce", " Barbosa");
nomeCompleto2("Carina", " Messias");
