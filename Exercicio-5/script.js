var numero = document.getElementById("numero")
var numeroDoCartao = document.getElementById("numeroCartao")
Inputmask({"mask": "9999 9999 9999 9999"}).mask(numero);
Inputmask({"mask": "9999 9999 9999 9999"}).mask(numeroDoCartao);
const validarNumero = /[0-9]/
const validarNumeroCartao = /([0-9]{4}\s)([0-9]{4}\s)([0-9]{4}\s)([0-9]{4})/

function executar(){
    
    let nomeDoCartao = document.getElementById("nome")
    let numeroTwo = document.getElementById("numero").value
    let nomeDoCartaoCredito = document.getElementById("nomeCartao")
    let mes = document.getElementById("mes").value
    let dataCartaoMes = document.getElementById("dataCartaoMes")
    let ano = document.getElementById("ano").value
    let dataCartaoAno = document.getElementById("dataCartaoAno")
    let cvc = document.getElementById("cvc").value
    let infCvc = document.getElementById("cvcCartaoBack")

    numeroCovertido = (numeroTwo)
    let nome = nomeDoCartao.value.toUpperCase()

    removerMensagensDeErroName()
    if ((validarNumero.test(nome) === false) && (nome != "")){
        nomeDoCartao.style.borderColor = "hsl(270, 3%, 87%)"
        nomeDoCartaoCredito.innerHTML = `<p>${nome}</p>`
    } else {
        mensagemErroNome() 
    }

    removerMensagensDeErroNumber()
    if ((validarNumeroCartao.test(numeroCovertido) === true) && (numeroCovertido !== "0000 0000 0000 0000")){
        document.getElementById("numero").style.borderColor = "hsl(270, 3%, 87%)"
        numeroDoCartao.innerHTML = `<p>${numeroCovertido}</p>`
        
        console.log(typeof(numeroCovertido))
    } else {
        removerMensagensDeErroNumber()
        mensagemErroNumero()
        console.log("caiu errado")
        console.log(typeof(numeroCovertido))
    }

    removerMensagensDeErroMes()
    if ((isNaN(mes) === false) && (mes > 0 && mes <= 12 ) && (mes.length == "2")){
        document.getElementById("mes").style.borderColor = "hsl(270, 3%, 87%)"
        dataCartaoMes.innerHTML = `<p>${mes}/</p>`
    } else {
        mensagemErroMes()
    }

    removerMensagensDeErroAno()
    if ((isNaN(ano) === false) && (ano.length == "2")){
        document.getElementById("ano").style.borderColor = "hsl(270, 3%, 87%)"
        dataCartaoAno.innerHTML = `<p>${ano}</p>`
    } else {
        mensagemErroAno()
    }

    removerMensagensDeErroCvc()
    if ((isNaN(cvc) === false) && (cvc != 0 ) && (cvc.length == "3")){
        document.getElementById("cvc").style.borderColor = "hsl(270, 3%, 87%)"
        infCvc.innerHTML = `<p>${cvc}</p>`
    } else {
        mensagemErroCvc()
    }

    if ((validarNumero.test(nome) === false) && (nome != "") && (validarNumeroCartao.test(numeroCovertido) === true) && (numeroCovertido !== "0000 0000 0000 0000") && (isNaN(mes) === false) && (mes > 0 && mes <= 12 ) && (mes.length == "2") && (isNaN(ano) === false) && (ano.length == "2") && (isNaN(cvc) === false) && (cvc != 0 ) && (cvc.length == "3")){
        document.getElementById("totalInfCartao").style.display = "none"
        document.getElementById("total-depoisDaExecucao").style.display = "block"
    }
     
}


function mensagemErroNome(){
    let divName = document.getElementById("infoName")
    let p = document.createElement('p')
    p.innerHTML= '<p class="p">Wrong format, only letters and mandatory field completion</p>'
    p.style.color = "red"
    p.style.fontSize = "8px"
    p.style.fontFamily = "Space Grotesk, sans-serif"
    divName.appendChild(p)
    document.getElementById("nome").style.borderColor = "red"
}


function mensagemErroNumero(){
    let divNumero = document.getElementById("div-number")
    let p = document.createElement('p')
    p.innerHTML = '<p class="pNumber">Wrong format, only numbers and mandatory field completion</p>'
    p.style.color = "red"
    p.style.fontSize = "8px"
    p.style.fontFamily = "Space Grotesk, sans-serif"
    divNumero.appendChild(p)
    document.getElementById("numero").style.borderColor = "red"
}


function mensagemErroMes(){
    let divMes = document.getElementById("div-mes-ano")
    let p = document.createElement('p')
    p.innerHTML = '<p class="pMes">Incorrect filling</p>'
    p.style.color = "red"
    p.style.fontSize = "8px"
    p.style.fontFamily = "Space Grotesk, sans-serif"
    divMes.appendChild(p)
    document.getElementById("mes").style.borderColor = "red"
}

function mensagemErroAno(){
    let divAno = document.getElementById("div-mes-ano")
    let p = document.createElement('p')
    p.innerHTML = '<p class="pAno">Incorrect filling</p>'
    p.style.color = "red"
    p.style.fontSize = "8px"
    p.style.fontFamily = "Space Grotesk, sans-serif"
    divAno.appendChild(p)
    document.getElementById("ano").style.borderColor = "red"
}

function mensagemErroCvc(){
    let divCvc = document.getElementById("div-cvc")
    let p = document.createElement('p')
    p.innerHTML = '<p class="pCvc">Incorrect filling</p>'
    p.style.color = "red"
    p.style.fontSize = "8px"
    p.style.fontFamily = "Space Grotesk, sans-serif"
    p.style.paddingLeft = "10px"
    divCvc.appendChild(p)
    document.getElementById("cvc").style.borderColor = "red"
}

// Funcoes para remover mensagens de erro.

function removerMensagensDeErroName(){
    let infoName = document.getElementById("infoName")
    let p = document.getElementsByClassName("p")[0]

    if(infoName.contains(p)){
        p.parentNode.removeChild(p)
    }             
}

function removerMensagensDeErroNumber(){
    let divNumber = document.getElementById("div-number")
    let pNumber = document.getElementsByClassName("pNumber")[0]

    if(divNumber.contains(pNumber)){
        pNumber.parentNode.removeChild(pNumber)
    }             
}

function removerMensagensDeErroMes(){
    let divMes = document.getElementById("div-mes-ano")
    let pMes = document.getElementsByClassName("pMes")[0]

    if(divMes.contains(pMes)){
        pMes.parentNode.removeChild(pMes)
    }             
}

function removerMensagensDeErroAno(){
    let divAno = document.getElementById("div-mes-ano")
    let pAno = document.getElementsByClassName("pAno")[0]

    if(divAno.contains(pAno)){
        pAno.parentNode.removeChild(pAno)
    }             
}

function removerMensagensDeErroCvc(){
    let divCvc = document.getElementById("div-cvc")
    let pCvc = document.getElementsByClassName("pCvc")[0]

    if(divCvc.contains(pCvc)){
        pCvc.parentNode.removeChild(pCvc)
    }             
}

function executarContinuacao(){
    location.reload()
}


