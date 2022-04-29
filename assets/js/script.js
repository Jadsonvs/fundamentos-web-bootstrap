/*
Case Sensitive = Reconhece letra maiúscula e minúscula

Por Tag: getElementByTagName()
Por Id: getElementById()
Por nome: getElementsByNome()
Por Classe: getElementsByClassName()
Por Seletor: querySelector()
*/

let nome = window.document.getElementById('nome')
let email = document.querySelector('#email')
let assunto = document.querySelector('#assunto')
let mapa = document.querySelector("#mapa")
let nomeOk = false
let emailOk = false
let assuntoOk = false

nome.style.width = '100%'
email.style.width = '100%'

function validaNome(){
    let txtNome = document.querySelector('#txtNome')
    if(nome.value.length < 3){
      txtNome.innerHTML = 'Nome Inválido'
      txtNome.style.color = 'red'
    }else{
        txtNome.innerHTML = 'Nome Válido'
        txtNome.style.color = 'green'
        nomeOk = true
    }
    
}

/*validação sem regex
function validaEmail(){
    let txtEmail = document.querySelector('#txtEmail')
    if(email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1){
        txtEmail.innerHTML = "E-mail Inválido"
        txtEmail.style.color = "red"
    }else{
        txtEmail.innerHTML = "E-mail Válido"
        txtEmail.style.color = "green"
        emailOk = true
    }
}
*/
//validação com regex//

function validaEmail(){
    let regex = /^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/
    if(email.value.match(regex)){
        txtEmail.innerHTML = "E-mail Válido"
        txtEmail.style.color = "green"
        emailOk = true
    }else{
        txtEmail.innerHTML = "E-mail Inválido"
        txtEmail.style.color = "red"
        emailOk = false
    }
}

function validaAssunto(){
    let txtAssunto = document.querySelector("#txtAssunto")
    if (assunto.value.length >= 3){
        txtAssunto.innerHTML = "Digite no máximo 100 caracteres"
        txtAssunto.style.color = 'red'
        txtAssunto.style.display = "block"
    }else{
        txtAssunto.style.display = "none"
        assuntoOk = true
    }
}

function enviar(){
    if(nomeOk == true && emailOk == true && assuntoOk == true){
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Formulário enviado com sucesso!',
            showConfirmButton: false,
            timer: 1500
          })
    }else{
        Swal.fire({
            icon: 'error',
            title: 'Preencha o formulário corretamente antes de enviar...',
          })
    }
}

function mapaZoom(){
    mapa.style.width = "600px"
    mapa.style.height = "400px"
}

function mapaNormal(){
    mapa.style.width = "400px"
    mapa.style.height = "250px"
}

