function helloWorld(){
    alert('Hello World');
};

let nome = document.getElementById('nome'); // pega o elemento com id nome
let email = document.getElementById('email'); // pega o elemento com id email
let assunto = document.getElementById('assunto'); // pega o elemento com id assunto
let mapa = document.getElementById('mapa'); // pega o elemento com id mapa
let nomeOk = false;
let emailOk = false;
let assuntoOk = false;

function enviar() {
    if(nomeOk && emailOk && assuntoOk){
        alert('Enviado com sucesso');
    }else {
        alert('Preencha todos os campos');
    }
}

function validaNome() {
    let nomeErro = document.getElementById('nomeErro');
    if(nome.value.length < 3){
        nome.style.border = '1px solid red';
        nomeErro.style.marginBottom = '5px';
        nomeErro.style.color = 'red';
        nomeErro.innerHTML = 'Nome muito curto';
    }else {
        nome.style.border = '1px solid green';
        nomeErro.innerHTML = '';
        nomeOk = true;
    }
}

function validaEmail() {
    let emailErro = document.querySelector('#emailErro');
    if(email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1 || email.value.length < 5){
        email.style.border = '1px solid red';
        emailErro.style.marginBottom = '5px';
        emailErro.style.color = 'red';
        emailErro.innerHTML = 'Email inválido';
    }else {
        email.style.border = '1px solid green';
        emailErro.style.color = 'green';
        emailErro.innerHTML = '';
        emailOk = true;
    }
}

function validaAssunto() {
    let assuntoErro = document.querySelector('#assuntoErro');
    if(assunto.value.length < 5){
        assunto.style.border = '1px solid red';
        assuntoErro.style.marginBottom = '5px';
        assuntoErro.style.color = 'red';
        assuntoErro.innerHTML = 'Assunto muito curto';
    }else {
        assunto.style.border = '1px solid green';
        assuntoErro.innerHTML = '';
        assuntoOk = true;
    }
}

function mapaZoom() {
    mapa.style.width = '800px';
    mapa.style.height = '600px';
}

function mapaNormal() {
    mapa.style.width = '600px';
    mapa.style.height = '450px';
}