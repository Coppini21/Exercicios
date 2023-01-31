var jogadorX = prompt("Informe o nome do jogador X:")
var jogadorO = prompt("Informe o nome do jogador O:")
var jogadorInicial = ""
let itens = document.querySelectorAll(".item")


function nomeJogadorX() {
    while (jogadorX === "" || jogadorX === null || jogadorX === jogadorO) {
        alert("Error: Preencha o campo corretamente!")
        jogadorX = prompt("Informe o nome do jogador X:")
    }

    document.getElementById("nomeJogadorX").innerText = ` ${jogadorX}`

}

function nomeJogadorO() {
    while (jogadorO === "" || jogadorO === null) {
        alert("Error: Preencha o campo corretamente!")
        jogadorO = prompt("Informe o nome do jogador O:")
    }

    document.getElementById("nomeJogadorO").innerText = ` ${jogadorO}`
}


function sorteio() {
    let lista = ["X", "O"]
    const random = (min, max) => Math.floor(Math.random() * (max - min) + min)

    const resultadoSorteio = lista[random(0, lista.length)]

    alert(`O jogador ${resultadoSorteio} começará jogando!`)

    jogadorInicial = resultadoSorteio

    document.getElementById("jogadorAtual").innerText = jogadorInicial === "O" ? jogadorO : jogadorX

    return resultadoSorteio
}




itens.forEach(item => {
    item.addEventListener("click", function selecionarQuadrado(event) {
        if (item.innerHTML === "-" && item.dataset.select === "false" && jogadorInicial !== "") {
            item.innerText = jogadorInicial
            item.style.color = "black"
            item.dataset.select = "true"

            if (jogadorInicial === 'O' && item.innerHTML === "O" || jogadorInicial === 'O' && item.innerHTML === "-") {
                jogadorInicial = "X"
                document.getElementById("jogadorAtual").innerText = jogadorX
            } else if (jogadorInicial === 'X' && item.innerHTML === "X" || jogadorInicial === 'X' && item.innerHTML === "-") {
                jogadorInicial = "O"
                document.getElementById("jogadorAtual").innerText = jogadorO
            }

            const quad1 = document.getElementById("1")
            const quad2 = document.getElementById("2")
            const quad3 = document.getElementById("3")
            const quad4 = document.getElementById("4")
            const quad5 = document.getElementById("5")
            const quad6 = document.getElementById("6")
            const quad7 = document.getElementById("7")
            const quad8 = document.getElementById("8")
            const quad9 = document.getElementById("9")


            probabilidadesDeVencer(quad1, quad2, quad3)
            probabilidadesDeVencer(quad4, quad5, quad6)
            probabilidadesDeVencer(quad7, quad8, quad9)
            probabilidadesDeVencer(quad1, quad4, quad7)
            probabilidadesDeVencer(quad2, quad5, quad8)
            probabilidadesDeVencer(quad3, quad6, quad9)
            probabilidadesDeVencer(quad1, quad5, quad9)
            probabilidadesDeVencer(quad3, quad5, quad7)

        } else {
            return alert("ERROR:\n1- Verifique se você apertou o botão 'Iniciar Sorteio'\n2- O botão já selecionado não poderá ser selecionado novamente")
        }
    })
})




function probabilidadesDeVencer(quadrado1, quadrado2, quadrado3) {
    let itens = document.querySelectorAll(".item")
    let jogador = document.getElementById("jogadorAtual")

    if (quadrado1.innerHTML !== "-" && quadrado1.innerHTML === quadrado2.innerHTML && quadrado2.innerHTML === quadrado3.innerHTML) {
        quadrado1.style.background = "green"
        quadrado2.style.background = "green"
        quadrado3.style.background = "green"

        document.getElementById("vencedor").innerText = jogador.innerHTML === jogadorO ? jogadorX : jogadorO

        if (quadrado1.style.background === "green" && quadrado2.style.background === "green" && quadrado3.style.background === "green") {


            itens.forEach(item => {
                item.addEventListener('click', function reinit(event) {
                    window.location.reload()

                })
            })

        }

    }
}




function resetar(event) {

    itens.forEach(item => {
        jogadorInicial = ""
        item.innerText = "-"
        item.style.color = "rgb(247, 238, 238)"
        item.style.background = "rgb(247, 238, 238)"
        item.dataset.select = "false"
        document.getElementById("jogadorAtual").innerText = ""
        document.getElementById("vencedor").innerText = ""

    })

}



nomeJogadorX()
nomeJogadorO()
