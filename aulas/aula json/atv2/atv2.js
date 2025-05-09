let nome1 = ""
let idade1  = ""
let cpf1 = ""
let telefone1 = ""

let nome2 = ""
let idade2  = ""
let cpf2 = ""
let telefone2 = ""

let nome3 = ""
let idade3  = ""
let cpf3= ""
let telefone3 = ""

let nome4 = ""
let idade4  = ""
let cpf4 = ""
let telefone4 = ""

let nome5 = ""
let idade5  = ""
let cpf5 = ""
let telefone5 = ""

let paragrafo = document.getElementById("Usuarios");

fetch("./json/data2.json")
.then(response => response.json())
.then(listaUsuarios =>{
    nome1 = listaUsuarios.cadastrados[0].nome;
    idade1 = listaUsuarios.cadastrados[0].idade;
    cpf1 = listaUsuarios.cadastrados[0].cpf;
    telefone1 = listaUsuarios.cadastrados[0].telefone;

    nome1 = listaUsuarios.cadastrados[1].nome;
    idade1 = listaUsuarios.cadastrados[1].idade;
    cpf1 = listaUsuarios.cadastrados[1].cpf;
    telefone1 = listaUsuarios.cadastrados[1].telefone;

    nome1 = listaUsuarios.cadastrados[2].nome;
    idade1 = listaUsuarios.cadastrados[2].idade;
    cpf1 = listaUsuarios.cadastrados[2].cpf;
    telefone1 = listaUsuarios.cadastrados[2].telefone;

    nome1 = listaUsuarios.cadastrados[3].nome;
    idade1 = listaUsuarios.cadastrados[3].idade;
    cpf1 = listaUsuarios.cadastrados[3].cpf;
    telefone1 = listaUsuarios.cadastrados[3].telefone;

    nome1 = listaUsuarios.cadastrados[4].nome;
    idade1 = listaUsuarios.cadastrados[4].idade;
    cpf1 = listaUsuarios.cadastrados[4].cpf;
    telefone1 = listaUsuarios.cadastrados[4].telefone;
    
paragrafo.innerHTML = "usuarios cadastrados \n Nome:" + nome1 + "\n idade: " + idade1 + "/n"  ;


})
