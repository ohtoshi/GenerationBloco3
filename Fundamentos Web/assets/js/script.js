/*
Case sensitive

por Tag: getElementByTagName()
por Id: getElementById()
por Nome: getElementsByName()
por Classe: getElementsByClassName()
por Seletor: querySelector()
*/

let nome = window.document.getElementById('nome')
let email = document.querySelector('#email')
let assunto = document.querySelector('#assunto')
let mensagem = document.querySelector('#mensagem')
let txtAssunto = document.querySelector('#txtAssunto')   
let txtMensagem = document.querySelector('#txtMensagem')
let count = 0
let nomeOk = false
let emailOk = false
let assuntoOk = false
let mensagemOk = false
let mapa = document.querySelector('#mapa')

function validaNome() {
    let txtNome = document.querySelector('#txtNome')

    if (nome.value.length < 3) {
        txtNome.innerHTML = 'Nome inválido'
        nome.style.borderBottom = '2px solid red';
        txtNome.style.color = 'red'
        txtNome.style.fontSize = "12px";
    } else {
        txtNome.innerHTML = 'Nome válido'
        nome.style.borderBottom = '2px solid green';
        txtNome.style.color = 'green'
        txtNome.style.fontSize = "12px";
        nomeOk = true
    }
}

function validaEmail() {
    let regex = /^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/gim;
     //validador de e-mail regex

    if (email.value.match(regex)) {
        email.style.borderBottom = '2px solid green';
        txtEmail.style.color = 'green';
        txtEmail.innerHTML = 'E-mail válido';
        txtEmail.style.fontSize = "12px";
        emailOk = true
    } else {
        email.style.borderBottom = '2px solid red';
        txtEmail.style.color = 'red';
        txtEmail.innerHTML = 'E-mail inválido';
        txtEmail.style.fontSize = "12px";
     }
}

// insere a contagem de caracteres abaixo da textarea
txtAssunto.innerHTML = 'Quantidade de caracteres: ' + count + ' /50';
// txtAssunto.innerHTML = `Quantidade de caracteres: ${count}/50`;
// outra maneira de fazer a mesma contagem
txtAssunto.style.fontSize = "12px";

function validaAssunto() {
    count = assunto.value.length;
    txtAssunto.innerHTML = 'Quantidade de caracteres: ' + count + ' /50';
    // txtAssunto.innerHTML = `Quantidade de caracteres: ${count}/50`;    

    if (assunto.value.length <= 50) {
        assunto.style.borderBottom = '3px solid green';
        assunto.style.color = 'green';
        assuntoOk = true
    } else {
        assunto.style.borderBottom = '3px solid red';
        assunto.style.color = 'red';
      }
    }

txtMensagem.innerHTML = 'Quantidade de caracteres: ' + count + ' /500';
txtMensagem.style.fontSize = "12px";
    
function validaMensagem() {
    let count = 0
    count = mensagem.value.length;
    txtMensagem.innerHTML = 'Quantidade de caracteres: ' + count + ' /500';    
    
    if (mensagem.value.length <= 500) {
        mensagem.style.borderBottom = '3px solid green';
        mensagem.style.color = 'green';
        mensagemOk = true
    } else {
        mensagem.style.borderBottom = '3px solid red';
        mensagem.style.color = 'red';
        }
    }

function enviar() {
    if (nomeOk == true && emailOk == true && assuntoOk == true && mensagemOk == true) {
        alert ("Mensagem enviada com sucesso!")
    } else {
        alert ("Preencha os campos corretamente antes de enviar!")
    }
}

function mapaZoom() {
    mapa.style.width = '800px'
    mapa.style.height = '600px'
}

function mapaNormal() {
    mapa.style.width = '400px'
    mapa.style.height = '250px'
}