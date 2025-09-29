//criando constante para receber o modulo express
const express = require('express');
//criando aplicação express
const app = express();

let pgPrincipal = function(req, res){
    res.send('Bem Vindo ao Servidor Node.js com Express')
}
let pgUsuarios = function(req, res){
   res.send(usuarios);
   
}

//rota principal
app.get("/", pgPrincipal);


//rota usuarios


app.get("/sobre", (req, res) => {
    res.send('Isso é sobre o projeto');
});

const usuarios = ['Mauro', 'Alice', 'Juliano', 'Roger'];

app.get("/usuarios", (req, res) => {
    let html = '<h1>Lista de Usuarios</h1>';
    html = html + '<ul>'
    for(let usuariosAtual of usuarios){
        html += `<li> ${usuariosAtual} </li>`
    }
    html += '</ul>';
    res.send(html);
})

app.get('/soma/:n1/:n2', (eq, res) => {
    const n1 = Number(req.params.n1);
    const n2 = Number(req.params.n2);
    const resultado = n1 + n2;
    res.send(`${n1} + ${n2} = ${resultado}`);
})
app.get('/menu', (req, res) => {
    let html = `
    <h1>Menu</h1>
    <a href="/">Principal</a> <br>
    <a href="/sobre">Sobre</a> <br>
    <a href="/usuários">Usuários</a> <br>
    <a href="/usuário/1">Usuário 1</a> <br>
    <a href="/soma/16/48">Soma</a> <br>
    
    `;
})
const porta = 3000;
app.listen(porta, () => {
    console.log(`Servidor Rodando em http://localhost:${porta}`);
   
})



