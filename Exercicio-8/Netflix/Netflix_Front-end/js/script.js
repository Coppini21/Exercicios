document.addEventListener("DOMContentLoaded", async function() {
await buscarInfoFilmes()
await buscarInfoFilmesAssistidos()
var m = window.matchMedia("(max-width: 425px)");
var n = window.matchMedia("(min-width: 426px) and (max-width: 769px)");

window.onresize = displayWindowSize;
    window.onload = displayWindowSize;
    function displayWindowSize() {
        m = window.matchMedia("(max-width: 425px)");
        n = window.matchMedia("(min-width: 426px) and (max-width: 769px)");
    };

slider()
carousel(m, n)
carouselFilmesLancamentos(m, n)
carouselFilmesPopulares(m, n)
carouselFilmesTerror(m, n)
carouselFilmesComedia(m, n)
carouselFilmesAcao(m, n)
carouselFilmesAventura(m, n)
carouselFilmesDrama(m, n)
carouselFilmesRomance(m, n)
carouselFantasia(m, n)
carouselSuspense(m, n)
carouselSeries(m, n)
mouseoverItemFilme(m, n)
mouseoutItemFilme(m, n)
reticenciasNoFinalSinopse(m, n)
mouseoverSinopse(m, n)
document.getElementById('radio1').checked = true;


m.addListener(carousel)
n.addListener(carousel)
m.addListener(carouselFilmesLancamentos)
n.addListener(carouselFilmesLancamentos)
m.addListener(carouselFilmesPopulares)
n.addListener(carouselFilmesPopulares)
m.addListener(carouselFilmesTerror)
n.addListener(carouselFilmesTerror)
m.addListener(carouselFilmesComedia)
n.addListener(carouselFilmesComedia)
m.addListener(carouselFilmesAcao)
n.addListener(carouselFilmesAcao)
m.addListener(carouselFilmesAventura)
n.addListener(carouselFilmesAventura)
m.addListener(carouselFilmesDrama)
n.addListener(carouselFilmesDrama)
m.addListener(carouselFilmesRomance)
n.addListener(carouselFilmesRomance)
m.addListener(carouselFantasia)
n.addListener(carouselFantasia)
m.addListener(carouselSuspense)
n.addListener(carouselSuspense)
m.addListener(carouselSeries)
n.addListener(carouselSeries)


async function buscarInfoFilmesAssistidos(){
    let infoDoUsuario = localStorage.getItem('user')
    let { id } = JSON.parse(infoDoUsuario)
   
    const rotaFilmesAssistidos = await fetch(`http://localhost:3000/assistidos/${id}`)
    let filmesAssistidos = await rotaFilmesAssistidos.json()

    filmesAssistidos.forEach((filmeAssistido) => {
        const previews = document.getElementsByClassName("previews")[0]

        let div = document.createElement("div")
        let divTwo = document.createElement("div")
        let img = document.createElement("img")
        let divThree = document.createElement("div")
        let imgTwo = document.createElement("img")
        let imgThree = document.createElement("img")

        div.classList.add("totalItem", "itemPreview")
        divTwo.classList.add("divFilme")
        img.classList.add("item")
        img.setAttribute("src", `../Netflix_Back-end/src/${filmeAssistido.capa}`)
        divThree.classList.add("divMylistPlayInf")
        imgTwo.setAttribute("src", "imagens/Group 12.png")
        imgThree.setAttribute("src", "imagens/Group 13.png")
        imgThree.classList.add("play")

        previews.appendChild(div)
        div.appendChild(divTwo)
        divTwo.appendChild(img)
        divTwo.appendChild(divThree)
        divThree.appendChild(imgTwo)
        divThree.appendChild(imgThree)
        
    })

}

async function buscarInfoFilmes(){
    const rotaFilmes = await fetch (`http://localhost:3000/filmes`)
    
    let filmes = await rotaFilmes.json()

    filmes.forEach((filme) => {
        
         if(filme.nome === "Lançamentos"){
            const categoriaLancamentos = document.getElementsByClassName("categoriaLancamentos")[0]

            let div = document.createElement("div")
            let divTwo = document.createElement("div")
            let img = document.createElement("img")
            let divThree = document.createElement("div")
            let imgTwo = document.createElement("img")
            let imgThree = document.createElement("img")

            div.classList.add("totalItem", "itemLancamento")
            divTwo.classList.add("divFilme")
            img.classList.add("itemFilmeLancamento")
            img.setAttribute("src", `../Netflix_Back-end/src/${filme.capa}`)
            divThree.classList.add("divMylistPlayInf")
            imgTwo.setAttribute("src", "imagens/Group 12.png")
            imgThree.setAttribute("src", "imagens/Group 13.png")
            imgThree.classList.add("play")

            categoriaLancamentos.appendChild(div)
            div.appendChild(divTwo)
            divTwo.appendChild(img)
            divTwo.appendChild(divThree)
            divThree.appendChild(imgTwo)
            divThree.appendChild(imgThree)

        } else if(filme.nome === "Populares"){
            const categoriaPopulares = document.getElementsByClassName("categoriaPopulares")[0]

            let div = document.createElement("div")
            let divTwo = document.createElement("div")
            let img = document.createElement("img")
            let divThree = document.createElement("div")
            let imgTwo = document.createElement("img")
            let imgThree = document.createElement("img")

            div.classList.add("totalItem", "itemPopular")
            divTwo.classList.add("divFilme")
            img.classList.add("itemFilmePopulares")
            img.setAttribute("src", `../Netflix_Back-end/src/${filme.capa}`)
            divThree.classList.add("divMylistPlayInf")
            imgTwo.setAttribute("src", "imagens/Group 12.png")
            imgThree.setAttribute("src", "imagens/Group 13.png")
            imgThree.classList.add("play")

            categoriaPopulares.appendChild(div)
            div.appendChild(divTwo)
            divTwo.appendChild(img)
            divTwo.appendChild(divThree)
            divThree.appendChild(imgTwo)
            divThree.appendChild(imgThree)

        } else if(filme.nome === "Terror"){
            const categoriaTerror = document.getElementsByClassName("categoriaTerror")[0]

            let div = document.createElement("div")
            let divTwo = document.createElement("div")
            let img = document.createElement("img")
            let divThree = document.createElement("div")
            let imgTwo = document.createElement("img")
            let imgThree = document.createElement("img")

            div.classList.add("totalItem", "itemTerror")
            divTwo.classList.add("divFilme")
            img.classList.add("itemFilmeTerror")
            img.setAttribute("src", `../Netflix_Back-end/src/${filme.capa}`)
            divThree.classList.add("divMylistPlayInf")
            imgTwo.setAttribute("src", "imagens/Group 12.png")
            imgThree.setAttribute("src", "imagens/Group 13.png")
            imgThree.classList.add("play")

            categoriaTerror.appendChild(div)
            div.appendChild(divTwo)
            divTwo.appendChild(img)
            divTwo.appendChild(divThree)
            divThree.appendChild(imgTwo)
            divThree.appendChild(imgThree)

        } else if(filme.nome === "Comédia"){
            const categoriaComedia = document.getElementsByClassName("categoriaComedia")[0]

            let div = document.createElement("div")
            let divTwo = document.createElement("div")
            let img = document.createElement("img")
            let divThree = document.createElement("div")
            let imgTwo = document.createElement("img")
            let imgThree = document.createElement("img")

            div.classList.add("totalItem", "itemComedia")
            divTwo.classList.add("divFilme")
            img.classList.add("itemFilmeComedia")
            img.setAttribute("src", `../Netflix_Back-end/src/${filme.capa}`)
            divThree.classList.add("divMylistPlayInf")
            imgTwo.setAttribute("src", "imagens/Group 12.png")
            imgThree.setAttribute("src", "imagens/Group 13.png")
            imgThree.classList.add("play")

            categoriaComedia.appendChild(div)
            div.appendChild(divTwo)
            divTwo.appendChild(img)
            divTwo.appendChild(divThree)
            divThree.appendChild(imgTwo)
            divThree.appendChild(imgThree)

        } else if(filme.nome === "Ação"){
            const categoriaAcao = document.getElementsByClassName("categoriaAcao")[0]

            let div = document.createElement("div")
            let divTwo = document.createElement("div")
            let img = document.createElement("img")
            let divThree = document.createElement("div")
            let imgTwo = document.createElement("img")
            let imgThree = document.createElement("img")

            div.classList.add("totalItem", "itemAcao")
            divTwo.classList.add("divFilme")
            img.classList.add("itemFilmeAcao")
            img.setAttribute("src", `../Netflix_Back-end/src/${filme.capa}`)
            divThree.classList.add("divMylistPlayInf")
            imgTwo.setAttribute("src", "imagens/Group 12.png")
            imgThree.setAttribute("src", "imagens/Group 13.png")
            imgThree.classList.add("play")

            categoriaAcao.appendChild(div)
            div.appendChild(divTwo)
            divTwo.appendChild(img)
            divTwo.appendChild(divThree)
            divThree.appendChild(imgTwo)
            divThree.appendChild(imgThree)

        } else if(filme.nome === "Aventura"){
            const categoriaAventura = document.getElementsByClassName("categoriaAventura")[0]

            let div = document.createElement("div")
            let divTwo = document.createElement("div")
            let img = document.createElement("img")
            let divThree = document.createElement("div")
            let imgTwo = document.createElement("img")
            let imgThree = document.createElement("img")

            div.classList.add("totalItem", "itemAventura")
            divTwo.classList.add("divFilme")
            img.classList.add("itemFilmeAventura")
            img.setAttribute("src", `../Netflix_Back-end/src/${filme.capa}`)
            divThree.classList.add("divMylistPlayInf")
            imgTwo.setAttribute("src", "imagens/Group 12.png")
            imgThree.setAttribute("src", "imagens/Group 13.png")
            imgThree.classList.add("play")

            categoriaAventura.appendChild(div)
            div.appendChild(divTwo)
            divTwo.appendChild(img)
            divTwo.appendChild(divThree)
            divThree.appendChild(imgTwo)
            divThree.appendChild(imgThree)

        } else if(filme.nome === "Drama"){
            const categoriaDrama = document.getElementsByClassName("categoriaDrama")[0]

            let div = document.createElement("div")
            let divTwo = document.createElement("div")
            let img = document.createElement("img")
            let divThree = document.createElement("div")
            let imgTwo = document.createElement("img")
            let imgThree = document.createElement("img")

            div.classList.add("totalItem", "itemDrama")
            divTwo.classList.add("divFilme")
            img.classList.add("itemFilmeDrama")
            img.setAttribute("src", `../Netflix_Back-end/src/${filme.capa}`)
            divThree.classList.add("divMylistPlayInf")
            imgTwo.setAttribute("src", "imagens/Group 12.png")
            imgThree.setAttribute("src", "imagens/Group 13.png")
            imgThree.classList.add("play")

            categoriaDrama.appendChild(div)
            div.appendChild(divTwo)
            divTwo.appendChild(img)
            divTwo.appendChild(divThree)
            divThree.appendChild(imgTwo)
            divThree.appendChild(imgThree)

        } else if(filme.nome === "Romance"){
            const categoriaRomance = document.getElementsByClassName("categoriaRomance")[0]

            let div = document.createElement("div")
            let divTwo = document.createElement("div")
            let img = document.createElement("img")
            let divThree = document.createElement("div")
            let imgTwo = document.createElement("img")
            let imgThree = document.createElement("img")

            div.classList.add("totalItem", "itemRomance")
            divTwo.classList.add("divFilme")
            img.classList.add("itemFilmeRomance")
            img.setAttribute("src", `../Netflix_Back-end/src/${filme.capa}`)
            divThree.classList.add("divMylistPlayInf")
            imgTwo.setAttribute("src", "imagens/Group 12.png")
            imgThree.setAttribute("src", "imagens/Group 13.png")
            imgThree.classList.add("play")

            categoriaRomance.appendChild(div)
            div.appendChild(divTwo)
            divTwo.appendChild(img)
            divTwo.appendChild(divThree)
            divThree.appendChild(imgTwo)
            divThree.appendChild(imgThree)

        } else if(filme.nome === "Fantasia"){
            const categoriaFantasia = document.getElementsByClassName("categoriaFantasia")[0]

            let div = document.createElement("div")
            let divTwo = document.createElement("div")
            let img = document.createElement("img")
            let divThree = document.createElement("div")
            let imgTwo = document.createElement("img")
            let imgThree = document.createElement("img")

            div.classList.add("totalItem", "itemFantasia")
            divTwo.classList.add("divFilme")
            img.classList.add("itemFilmeFantasia")
            img.setAttribute("src", `../Netflix_Back-end/src/${filme.capa}`)
            divThree.classList.add("divMylistPlayInf")
            imgTwo.setAttribute("src", "imagens/Group 12.png")
            imgThree.setAttribute("src", "imagens/Group 13.png")
            imgThree.classList.add("play")

            categoriaFantasia.appendChild(div)
            div.appendChild(divTwo)
            divTwo.appendChild(img)
            divTwo.appendChild(divThree)
            divThree.appendChild(imgTwo)
            divThree.appendChild(imgThree)

        } else if(filme.nome === "Suspense"){
            const categoriaSuspense = document.getElementsByClassName("categoriaSuspense")[0]

            let div = document.createElement("div")
            let divTwo = document.createElement("div")
            let img = document.createElement("img")
            let divThree = document.createElement("div")
            let imgTwo = document.createElement("img")
            let imgThree = document.createElement("img")

            div.classList.add("totalItem", "itemSuspense")
            divTwo.classList.add("divFilme")
            img.classList.add("itemFilmeSuspense")
            img.setAttribute("src", `../Netflix_Back-end/src/${filme.capa}`)
            divThree.classList.add("divMylistPlayInf")
            imgTwo.setAttribute("src", "imagens/Group 12.png")
            imgThree.setAttribute("src", "imagens/Group 13.png")
            imgThree.classList.add("play")

            categoriaSuspense.appendChild(div)
            div.appendChild(divTwo)
            divTwo.appendChild(img)
            divTwo.appendChild(divThree)
            divThree.appendChild(imgTwo)
            divThree.appendChild(imgThree)

        } else if(filme.nome === "Séries"){
            const categoriaSeries = document.getElementsByClassName("categoriaSeries")[0]

            let div = document.createElement("div")
            let divTwo = document.createElement("div")
            let img = document.createElement("img")
            let divThree = document.createElement("div")
            let imgTwo = document.createElement("img")
            let imgThree = document.createElement("img")

            div.classList.add("totalItem", "totalItemSerie")
            divTwo.classList.add("divFilme")
            img.classList.add("itemSerie")
            img.setAttribute("src", `../Netflix_Back-end/src/${filme.capa}`)
            divThree.classList.add("divMylistPlayInf")
            imgTwo.setAttribute("src", "imagens/Group 12.png")
            imgThree.setAttribute("src", "imagens/Group 13.png")
            imgThree.classList.add("play")

            categoriaSeries.appendChild(div)
            div.appendChild(divTwo)
            divTwo.appendChild(img)
            divTwo.appendChild(divThree)
            divThree.appendChild(imgTwo)
            divThree.appendChild(imgThree)

        }

        
        
    })


}



function slider(){
    var count = 1;

    setInterval( function(){
        nextImage()
    }, 8000)
    
    function nextImage(){
        count++;
        if(count > 4){
            count = 1
        }
    
        document.getElementById('radio' + count).checked = true;
    }
}

function carousel(m = false, n = false){
    let categoria = document.querySelectorAll(".categoria")[0]
    let itemLancamento = document.querySelectorAll(".itemPreview")[0]
    let controleFilmes = document.querySelectorAll('.control')
    var x = 0
  
    controleFilmes.forEach(clickLeft => {
        clickLeft.addEventListener('click', () => {
            const isLeft = clickLeft.classList.contains('arrow-left')
            var quantidadeTotalItens = categoria.children.length
            var larguraDaTela = parseFloat(window.innerWidth)
            let larguraTotalDivCategoria = 280 * quantidadeTotalItens
           

            if(isLeft){
                if(isLeft && n.matches ){
                    let larguraTotalDivCategoria = 160 * quantidadeTotalItens
                } else if(isLeft && m.matches ){
                    let larguraTotalDivCategoria = 110 * quantidadeTotalItens
                }
               
                x += larguraDaTela / 2 

                if(x > 0){
                    x = 0
                }

                itemLancamento.style.marginLeft = `${x}px`

            } else { 
                if(n.matches === true){
                    x -= larguraDaTela / 2
                    larguraTotalDivCategoria = 160 * quantidadeTotalItens
                    if(larguraDaTela - larguraTotalDivCategoria > x){
                        x = larguraDaTela - larguraTotalDivCategoria - 10
                        return itemLancamento.style.marginLeft = `${x}px`
                    }
                    return itemLancamento.style.marginLeft = `${x}px`
                } else if(m.matches === true){
                    x -= larguraDaTela / 2
                    larguraTotalDivCategoria = 110 * quantidadeTotalItens
                    if(larguraDaTela - larguraTotalDivCategoria > x){
                        x = larguraDaTela - larguraTotalDivCategoria - 10
                        return itemLancamento.style.marginLeft = `${x}px`
                    }
                    return itemLancamento.style.marginLeft = `${x}px`
                } else {
                    x -= larguraDaTela / 2
                    let larguraTotalDivCategoria = 280 * quantidadeTotalItens
                    if(larguraDaTela - larguraTotalDivCategoria > x ){
                        x = larguraDaTela - larguraTotalDivCategoria - 10
                        return itemLancamento.style.marginLeft = `${x}px`
                    } else {
                        return itemLancamento.style.marginLeft = `${x}px`
                    }
        
                }                      
            } 
        })
    })      
}

function carouselFilmesLancamentos(m = false, n = false){
    let categoria = document.querySelectorAll(".categoria")[0]
    let itemLancamento = document.querySelectorAll(".itemLancamento")[0]
    let controleFilmes = document.querySelectorAll('.controlFilmeLancamentos')
    let x = 0
  
    controleFilmes.forEach(clickLeft => {
        clickLeft.addEventListener('click', () => {
            const isLeft = clickLeft.classList.contains('arrow-leftFilmeLancamento')
            let quantidadeTotalItens = categoria.children.length
            let larguraDaTela = parseFloat(window.innerWidth)
            let larguraTotalDivCategoria = 280 * quantidadeTotalItens

            if(isLeft){
                if(isLeft && n.matches ){
                    let larguraTotalDivCategoria = 160 * quantidadeTotalItens
                } else if(isLeft && m.matches ){
                    let larguraTotalDivCategoria = 110 * quantidadeTotalItens
                }
               
                x += larguraDaTela / 2 

                if(x > 0){
                    x = 0
                }

                itemLancamento.style.marginLeft = `${x}px`

            } else {
                if(n.matches === true){
                    x -= larguraDaTela / 2
                    larguraTotalDivCategoria = 160 * quantidadeTotalItens
                    if(larguraDaTela - larguraTotalDivCategoria > x){
                        x = larguraDaTela - larguraTotalDivCategoria - 10
                        return itemLancamento.style.marginLeft = `${x}px`
                    }
                    return itemLancamento.style.marginLeft = `${x}px`
                } else if(m.matches === true){
                    x -= larguraDaTela / 2
                    larguraTotalDivCategoria = 110 * quantidadeTotalItens
                    if(larguraDaTela - larguraTotalDivCategoria > x){
                        x = larguraDaTela - larguraTotalDivCategoria - 10
                        return itemLancamento.style.marginLeft = `${x}px`
                    }
                    return itemLancamento.style.marginLeft = `${x}px`
                } else if(!m.matches && !n.matches){
                    x -= larguraDaTela / 2
                    let larguraTotalDivCategoria = 280 * quantidadeTotalItens
                    if(larguraDaTela - larguraTotalDivCategoria > x ){
                        x = larguraDaTela - larguraTotalDivCategoria - 10
                        return itemLancamento.style.marginLeft = `${x}px`
                    } else{
                        return itemLancamento.style.marginLeft = `${x}px`
                    }
    
                }                      
            } 
        })
    })      
}


function carouselFilmesPopulares(m = false, n = false){
    let categoria = document.querySelectorAll(".categoria")[2]
    let itemLancamento = document.querySelectorAll(".itemPopular")[0]
    let controleFilmes = document.querySelectorAll('.controlFilmePopulares')
    let x = 0
  
    controleFilmes.forEach(clickLeft => {
        clickLeft.addEventListener('click', () => {
            const isLeft = clickLeft.classList.contains('arrow-leftFilmePopulares')
            let quantidadeTotalItens = categoria.children.length
            let larguraDaTela = parseFloat(window.innerWidth)
            let larguraTotalDivCategoria = 280 * quantidadeTotalItens

            if(isLeft){
                if(isLeft && n.matches ){
                    let larguraTotalDivCategoria = 160 * quantidadeTotalItens
                } else if(isLeft && m.matches ){
                    let larguraTotalDivCategoria = 110 * quantidadeTotalItens
                }
               
                x += larguraDaTela / 2 

                if(x > 0){
                    x = 0
                }

                itemLancamento.style.marginLeft = `${x}px`

            } else {
                if(n.matches === true){
                    x -= larguraDaTela / 2
                    larguraTotalDivCategoria = 160 * quantidadeTotalItens
                    if(larguraDaTela - larguraTotalDivCategoria > x){
                        x = larguraDaTela - larguraTotalDivCategoria - 10
                        return itemLancamento.style.marginLeft = `${x}px`
                    }
                    return itemLancamento.style.marginLeft = `${x}px`
                } else if(m.matches === true){
                    x -= larguraDaTela / 2
                    larguraTotalDivCategoria = 110 * quantidadeTotalItens
                    if(larguraDaTela - larguraTotalDivCategoria > x){
                        x = larguraDaTela - larguraTotalDivCategoria - 10
                        return itemLancamento.style.marginLeft = `${x}px`
                    }
                    return itemLancamento.style.marginLeft = `${x}px`
                } else if(!m.matches && !n.matches){
                    x -= larguraDaTela / 2
                    let larguraTotalDivCategoria = 280 * quantidadeTotalItens
                    if(larguraDaTela - larguraTotalDivCategoria > x ){
                        x = larguraDaTela - larguraTotalDivCategoria - 10
                        return itemLancamento.style.marginLeft = `${x}px`
                    } else{
                        return itemLancamento.style.marginLeft = `${x}px`
                    }
    
                }                      
            } 
        })
    })      
}

function carouselFilmesTerror(m = false, n = false){
    let categoria = document.querySelectorAll(".categoria")[3]
    let itemLancamento = document.querySelectorAll(".itemTerror")[0]
    let controleFilmes = document.querySelectorAll('.controlFilmeTerror')
    let x = 0
  
    controleFilmes.forEach(clickLeft => {
        clickLeft.addEventListener('click', () => {
            const isLeft = clickLeft.classList.contains('arrow-leftFilmeTerror')
            let quantidadeTotalItens = categoria.children.length
            let larguraDaTela = parseFloat(window.innerWidth)
            let larguraTotalDivCategoria = 280 * quantidadeTotalItens

            if(isLeft){
                if(isLeft && n.matches ){
                    let larguraTotalDivCategoria = 160 * quantidadeTotalItens
                } else if(isLeft && m.matches ){
                    let larguraTotalDivCategoria = 110 * quantidadeTotalItens
                }
               
                x += larguraDaTela / 2 

                if(x > 0){
                    x = 0
                }

                itemLancamento.style.marginLeft = `${x}px`

            } else {
                if(n.matches === true){
                    x -= larguraDaTela / 2
                    larguraTotalDivCategoria = 160 * quantidadeTotalItens
                    if(larguraDaTela - larguraTotalDivCategoria > x){
                        x = larguraDaTela - larguraTotalDivCategoria - 10
                        return itemLancamento.style.marginLeft = `${x}px`
                    }
                    return itemLancamento.style.marginLeft = `${x}px`
                } else if(m.matches === true){
                    x -= larguraDaTela / 2
                    larguraTotalDivCategoria = 110 * quantidadeTotalItens
                    if(larguraDaTela - larguraTotalDivCategoria > x){
                        x = larguraDaTela - larguraTotalDivCategoria - 10
                        return itemLancamento.style.marginLeft = `${x}px`
                    }
                    return itemLancamento.style.marginLeft = `${x}px`
                } else if(!m.matches && !n.matches){
                    x -= larguraDaTela / 2
                    let larguraTotalDivCategoria = 280 * quantidadeTotalItens
                    if(larguraDaTela - larguraTotalDivCategoria > x ){
                        x = larguraDaTela - larguraTotalDivCategoria - 10
                        return itemLancamento.style.marginLeft = `${x}px`
                    } else{
                        return itemLancamento.style.marginLeft = `${x}px`
                    }
    
                }                      
            } 
        })
    })      
}

function carouselFilmesComedia(m = false, n = false){
    let categoria = document.querySelectorAll(".categoria")[4]
    let itemLancamento = document.querySelectorAll(".itemComedia")[0]
    let controleFilmes = document.querySelectorAll('.controlFilmeComedia')
    let x = 0
  
    controleFilmes.forEach(clickLeft => {
        clickLeft.addEventListener('click', () => {
            const isLeft = clickLeft.classList.contains('arrow-leftFilmeComedia')
            let quantidadeTotalItens = categoria.children.length
            let larguraDaTela = parseFloat(window.innerWidth)
            let larguraTotalDivCategoria = 280 * quantidadeTotalItens

            if(isLeft){
                if(isLeft && n.matches ){
                    let larguraTotalDivCategoria = 160 * quantidadeTotalItens
                } else if(isLeft && m.matches ){
                    let larguraTotalDivCategoria = 110 * quantidadeTotalItens
                }
               
                x += larguraDaTela / 2 

                if(x > 0){
                    x = 0
                }

                itemLancamento.style.marginLeft = `${x}px`

            } else {
                if(n.matches === true){
                    x -= larguraDaTela / 2
                    larguraTotalDivCategoria = 160 * quantidadeTotalItens
                    if(larguraDaTela - larguraTotalDivCategoria > x){
                        x = larguraDaTela - larguraTotalDivCategoria - 10
                        return itemLancamento.style.marginLeft = `${x}px`
                    }
                    return itemLancamento.style.marginLeft = `${x}px`
                } else if(m.matches === true){
                    x -= larguraDaTela / 2
                    larguraTotalDivCategoria = 110 * quantidadeTotalItens
                    if(larguraDaTela - larguraTotalDivCategoria > x){
                        x = larguraDaTela - larguraTotalDivCategoria - 10
                        return itemLancamento.style.marginLeft = `${x}px`
                    }
                    return itemLancamento.style.marginLeft = `${x}px`
                } else if(!m.matches && !n.matches){
                    x -= larguraDaTela / 2
                    let larguraTotalDivCategoria = 280 * quantidadeTotalItens
                    if(larguraDaTela - larguraTotalDivCategoria > x ){
                        x = larguraDaTela - larguraTotalDivCategoria - 10
                        return itemLancamento.style.marginLeft = `${x}px`
                    } else{
                        return itemLancamento.style.marginLeft = `${x}px`
                    }
    
                }                      
            } 
        })
    })      
}

function carouselFilmesAcao(m = false, n = false){
    let categoria = document.querySelectorAll(".categoria")[5]
    let itemLancamento = document.querySelectorAll(".itemAcao")[0]
    let controleFilmes = document.querySelectorAll('.controlFilmeAcao')
    let x = 0
  
    controleFilmes.forEach(clickLeft => {
        clickLeft.addEventListener('click', () => {
            const isLeft = clickLeft.classList.contains('arrow-leftFilmeAcao')
            let quantidadeTotalItens = categoria.children.length
            let larguraDaTela = parseFloat(window.innerWidth)
            let larguraTotalDivCategoria = 280 * quantidadeTotalItens

            if(isLeft){
                if(isLeft && n.matches ){
                    let larguraTotalDivCategoria = 160 * quantidadeTotalItens
                } else if(isLeft && m.matches ){
                    let larguraTotalDivCategoria = 110 * quantidadeTotalItens
                }
               
                x += larguraDaTela / 2 

                if(x > 0){
                    x = 0
                }

                itemLancamento.style.marginLeft = `${x}px`

            } else {
                if(n.matches === true){
                    x -= larguraDaTela / 2
                    larguraTotalDivCategoria = 160 * quantidadeTotalItens
                    if(larguraDaTela - larguraTotalDivCategoria > x){
                        x = larguraDaTela - larguraTotalDivCategoria - 10
                        return itemLancamento.style.marginLeft = `${x}px`
                    }
                    return itemLancamento.style.marginLeft = `${x}px`
                } else if(m.matches === true){
                    x -= larguraDaTela / 2
                    larguraTotalDivCategoria = 110 * quantidadeTotalItens
                    if(larguraDaTela - larguraTotalDivCategoria > x){
                        x = larguraDaTela - larguraTotalDivCategoria - 10
                        return itemLancamento.style.marginLeft = `${x}px`
                    }
                    return itemLancamento.style.marginLeft = `${x}px`
                } else if(!m.matches && !n.matches){
                    x -= larguraDaTela / 2
                    let larguraTotalDivCategoria = 280 * quantidadeTotalItens
                    if(larguraDaTela - larguraTotalDivCategoria > x ){
                        x = larguraDaTela - larguraTotalDivCategoria - 10
                        return itemLancamento.style.marginLeft = `${x}px`
                    } else{
                        return itemLancamento.style.marginLeft = `${x}px`
                    }
    
                }                      
            } 
        })
    })      
}

function carouselFilmesAventura(m = false, n = false){
    let categoria = document.querySelectorAll(".categoria")[6]
    let itemLancamento = document.querySelectorAll(".itemAventura")[0]
    let controleFilmes = document.querySelectorAll('.controlFilmeAventura')
    let x = 0
  
    controleFilmes.forEach(clickLeft => {
        clickLeft.addEventListener('click', () => {
            const isLeft = clickLeft.classList.contains('arrow-leftFilmeAventura')
            let quantidadeTotalItens = categoria.children.length
            let larguraDaTela = parseFloat(window.innerWidth)
            let larguraTotalDivCategoria = 280 * quantidadeTotalItens

            if(isLeft){
                if(isLeft && n.matches ){
                    let larguraTotalDivCategoria = 160 * quantidadeTotalItens
                } else if(isLeft && m.matches ){
                    let larguraTotalDivCategoria = 110 * quantidadeTotalItens
                }
               
                x += larguraDaTela / 2 

                if(x > 0){
                    x = 0
                }

                itemLancamento.style.marginLeft = `${x}px`

            } else {
                if(n.matches === true){
                    x -= larguraDaTela / 2
                    larguraTotalDivCategoria = 160 * quantidadeTotalItens
                    if(larguraDaTela - larguraTotalDivCategoria > x){
                        x = larguraDaTela - larguraTotalDivCategoria - 10
                        return itemLancamento.style.marginLeft = `${x}px`
                    }
                    return itemLancamento.style.marginLeft = `${x}px`
                } else if(m.matches === true){
                    x -= larguraDaTela / 2
                    larguraTotalDivCategoria = 110 * quantidadeTotalItens
                    if(larguraDaTela - larguraTotalDivCategoria > x){
                        x = larguraDaTela - larguraTotalDivCategoria - 10
                        return itemLancamento.style.marginLeft = `${x}px`
                    }
                    return itemLancamento.style.marginLeft = `${x}px`
                } else if(!m.matches && !n.matches){
                    x -= larguraDaTela / 2
                    let larguraTotalDivCategoria = 280 * quantidadeTotalItens
                    if(larguraDaTela - larguraTotalDivCategoria > x ){
                        x = larguraDaTela - larguraTotalDivCategoria - 10
                        return itemLancamento.style.marginLeft = `${x}px`
                    } else{
                        return itemLancamento.style.marginLeft = `${x}px`
                    }
    
                }                      
            } 
        })
    }) 
}

function carouselFilmesDrama(m = false, n = false){
    let categoria = document.querySelectorAll(".categoria")[7]
    let itemLancamento = document.querySelectorAll(".itemDrama")[0]
    let controleFilmes = document.querySelectorAll('.controlFilmeDrama')
    let x = 0
  
    controleFilmes.forEach(clickLeft => {
        clickLeft.addEventListener('click', () => {
            const isLeft = clickLeft.classList.contains('arrow-leftFilmeDrama')
            let quantidadeTotalItens = categoria.children.length
            let larguraDaTela = parseFloat(window.innerWidth)
            let larguraTotalDivCategoria = 280 * quantidadeTotalItens

            if(isLeft){
                if(isLeft && n.matches ){
                    let larguraTotalDivCategoria = 160 * quantidadeTotalItens
                } else if(isLeft && m.matches ){
                    let larguraTotalDivCategoria = 110 * quantidadeTotalItens
                }
               
                x += larguraDaTela / 2 

                if(x > 0){
                    x = 0
                }

                itemLancamento.style.marginLeft = `${x}px`

            } else {
                if(n.matches === true){
                    x -= larguraDaTela / 2
                    larguraTotalDivCategoria = 160 * quantidadeTotalItens
                    if(larguraDaTela - larguraTotalDivCategoria > x){
                        x = larguraDaTela - larguraTotalDivCategoria - 10
                        return itemLancamento.style.marginLeft = `${x}px`
                    }
                    return itemLancamento.style.marginLeft = `${x}px`
                } else if(m.matches === true){
                    x -= larguraDaTela / 2
                    larguraTotalDivCategoria = 110 * quantidadeTotalItens
                    if(larguraDaTela - larguraTotalDivCategoria > x){
                        x = larguraDaTela - larguraTotalDivCategoria - 10
                        return itemLancamento.style.marginLeft = `${x}px`
                    }
                    return itemLancamento.style.marginLeft = `${x}px`
                } else if(!m.matches && !n.matches){
                    x -= larguraDaTela / 2
                    let larguraTotalDivCategoria = 280 * quantidadeTotalItens
                    if(larguraDaTela - larguraTotalDivCategoria > x ){
                        x = larguraDaTela - larguraTotalDivCategoria - 10
                        return itemLancamento.style.marginLeft = `${x}px`
                    } else{
                        return itemLancamento.style.marginLeft = `${x}px`
                    }
    
                }                      
            } 
        })
    }) 
}

function carouselFilmesRomance(m = false, n = false){
    let categoria = document.querySelectorAll(".categoria")[8]
    let itemLancamento = document.querySelectorAll(".itemRomance")[0]
    let controleFilmes = document.querySelectorAll('.controlFilmeRomance')
    let x = 0
  
    controleFilmes.forEach(clickLeft => {
        clickLeft.addEventListener('click', () => {
            const isLeft = clickLeft.classList.contains('arrow-leftFilmeRomance')
            let quantidadeTotalItens = categoria.children.length
            let larguraDaTela = parseFloat(window.innerWidth)
            let larguraTotalDivCategoria = 280 * quantidadeTotalItens

            if(isLeft){
                if(isLeft && n.matches ){
                    let larguraTotalDivCategoria = 160 * quantidadeTotalItens
                } else if(isLeft && m.matches ){
                    let larguraTotalDivCategoria = 110 * quantidadeTotalItens
                }
               
                x += larguraDaTela / 2 

                if(x > 0){
                    x = 0
                }

                itemLancamento.style.marginLeft = `${x}px`

            } else {
                if(n.matches === true){
                    x -= larguraDaTela / 2
                    larguraTotalDivCategoria = 160 * quantidadeTotalItens
                    if(larguraDaTela - larguraTotalDivCategoria > x){
                        x = larguraDaTela - larguraTotalDivCategoria - 10
                        return itemLancamento.style.marginLeft = `${x}px`
                    }
                    return itemLancamento.style.marginLeft = `${x}px`
                } else if(m.matches === true){
                    x -= larguraDaTela / 2
                    larguraTotalDivCategoria = 110 * quantidadeTotalItens
                    if(larguraDaTela - larguraTotalDivCategoria > x){
                        x = larguraDaTela - larguraTotalDivCategoria - 10
                        return itemLancamento.style.marginLeft = `${x}px`
                    }
                    return itemLancamento.style.marginLeft = `${x}px`
                } else if(!m.matches && !n.matches){
                    x -= larguraDaTela / 2
                    let larguraTotalDivCategoria = 280 * quantidadeTotalItens
                    if(larguraDaTela - larguraTotalDivCategoria > x ){
                        x = larguraDaTela - larguraTotalDivCategoria - 10
                        return itemLancamento.style.marginLeft = `${x}px`
                    } else{
                        return itemLancamento.style.marginLeft = `${x}px`
                    }
    
                }                      
            } 
        })
    }) 
}

function carouselFantasia(m = false, n = false){
    let categoria = document.querySelectorAll(".categoria")[9]
    let itemLancamento = document.querySelectorAll(".itemFantasia")[0]
    let controleFilmes = document.querySelectorAll('.controlFilmesFantasia')
    let x = 0
  
    controleFilmes.forEach(clickLeft => {
        clickLeft.addEventListener('click', () => {
            const isLeft = clickLeft.classList.contains('arrow-leftFilmesFantasia')
            let quantidadeTotalItens = categoria.children.length
            let larguraDaTela = parseFloat(window.innerWidth)
            let larguraTotalDivCategoria = 280 * quantidadeTotalItens

            if(isLeft){
                if(isLeft && n.matches ){
                    let larguraTotalDivCategoria = 160 * quantidadeTotalItens
                } else if(isLeft && m.matches ){
                    let larguraTotalDivCategoria = 110 * quantidadeTotalItens
                }
               
                x += larguraDaTela / 2 

                if(x > 0){
                    x = 0
                }

                itemLancamento.style.marginLeft = `${x}px`

            } else {
                if(n.matches === true){
                    x -= larguraDaTela / 2
                    larguraTotalDivCategoria = 160 * quantidadeTotalItens
                    if(larguraDaTela - larguraTotalDivCategoria > x){
                        x = larguraDaTela - larguraTotalDivCategoria - 10
                        return itemLancamento.style.marginLeft = `${x}px`
                    }
                    return itemLancamento.style.marginLeft = `${x}px`
                } else if(m.matches === true){
                    x -= larguraDaTela / 2
                    larguraTotalDivCategoria = 110 * quantidadeTotalItens
                    if(larguraDaTela - larguraTotalDivCategoria > x){
                        x = larguraDaTela - larguraTotalDivCategoria - 10
                        return itemLancamento.style.marginLeft = `${x}px`
                    }
                    return itemLancamento.style.marginLeft = `${x}px`
                } else if(!m.matches && !n.matches){
                    x -= larguraDaTela / 2
                    let larguraTotalDivCategoria = 280 * quantidadeTotalItens
                    if(larguraDaTela - larguraTotalDivCategoria > x ){
                        x = larguraDaTela - larguraTotalDivCategoria - 10
                        return itemLancamento.style.marginLeft = `${x}px`
                    } else{
                        return itemLancamento.style.marginLeft = `${x}px`
                    }
    
                }                      
            } 
        })
    }) 
}

function carouselSuspense(m = false, n = false){
    let categoria = document.querySelectorAll(".categoria")[10]
    let itemLancamento = document.querySelectorAll(".itemSuspense")[0]
    let controleFilmes = document.querySelectorAll('.controlFilmesSuspense')
    let x = 0
  
    controleFilmes.forEach(clickLeft => {
        clickLeft.addEventListener('click', () => {
            const isLeft = clickLeft.classList.contains('arrow-leftFilmesSuspense')
            let quantidadeTotalItens = categoria.children.length
            let larguraDaTela = parseFloat(window.innerWidth)
            let larguraTotalDivCategoria = 280 * quantidadeTotalItens

            if(isLeft){
                if(isLeft && n.matches ){
                    let larguraTotalDivCategoria = 160 * quantidadeTotalItens
                } else if(isLeft && m.matches ){
                    let larguraTotalDivCategoria = 110 * quantidadeTotalItens
                }
               
                x += larguraDaTela / 2 

                if(x > 0){
                    x = 0
                }

                itemLancamento.style.marginLeft = `${x}px`

            } else {
                if(n.matches === true){
                    x -= larguraDaTela / 2
                    larguraTotalDivCategoria = 160 * quantidadeTotalItens
                    if(larguraDaTela - larguraTotalDivCategoria > x){
                        x = larguraDaTela - larguraTotalDivCategoria - 10
                        return itemLancamento.style.marginLeft = `${x}px`
                    }
                    return itemLancamento.style.marginLeft = `${x}px`
                } else if(m.matches === true){
                    x -= larguraDaTela / 2
                    larguraTotalDivCategoria = 110 * quantidadeTotalItens
                    if(larguraDaTela - larguraTotalDivCategoria > x){
                        x = larguraDaTela - larguraTotalDivCategoria - 10
                        return itemLancamento.style.marginLeft = `${x}px`
                    }
                    return itemLancamento.style.marginLeft = `${x}px`
                } else if(!m.matches && !n.matches){
                    x -= larguraDaTela / 2
                    let larguraTotalDivCategoria = 280 * quantidadeTotalItens
                    if(larguraDaTela - larguraTotalDivCategoria > x ){
                        x = larguraDaTela - larguraTotalDivCategoria - 10
                        return itemLancamento.style.marginLeft = `${x}px`
                    } else{
                        return itemLancamento.style.marginLeft = `${x}px`
                    }
    
                }                      
            } 
        })
    }) 
}

function carouselSeries(m = false, n = false){
    let categoria = document.querySelectorAll(".categoria")[11]
    let itemLancamento = document.querySelectorAll(".totalItemSerie")[0]
    let controleFilmes = document.querySelectorAll('.controlSeries')
    let x = 0
  
    controleFilmes.forEach(clickLeft => {
        clickLeft.addEventListener('click', () => {
            const isLeft = clickLeft.classList.contains('arrow-leftSeries')
            let quantidadeTotalItens = categoria.children.length
            let larguraDaTela = parseFloat(window.innerWidth)
            let larguraTotalDivCategoria = 280 * quantidadeTotalItens

            if(isLeft){
                if(isLeft && n.matches ){
                    let larguraTotalDivCategoria = 160 * quantidadeTotalItens
                } else if(isLeft && m.matches ){
                    let larguraTotalDivCategoria = 110 * quantidadeTotalItens
                }
               
                x += larguraDaTela / 2 

                if(x > 0){
                    x = 0
                }

                itemLancamento.style.marginLeft = `${x}px`

            } else {
                if(n.matches === true){
                    x -= larguraDaTela / 2
                    larguraTotalDivCategoria = 160 * quantidadeTotalItens
                    if(larguraDaTela - larguraTotalDivCategoria > x){
                        x = larguraDaTela - larguraTotalDivCategoria - 10
                        return itemLancamento.style.marginLeft = `${x}px`
                    }
                    return itemLancamento.style.marginLeft = `${x}px`
                } else if(m.matches === true){
                    x -= larguraDaTela / 2
                    larguraTotalDivCategoria = 110 * quantidadeTotalItens
                    if(larguraDaTela - larguraTotalDivCategoria > x){
                        x = larguraDaTela - larguraTotalDivCategoria - 10
                        return itemLancamento.style.marginLeft = `${x}px`
                    }
                    return itemLancamento.style.marginLeft = `${x}px`
                } else if(!m.matches && !n.matches){
                    x -= larguraDaTela / 2
                    let larguraTotalDivCategoria = 280 * quantidadeTotalItens
                    if(larguraDaTela - larguraTotalDivCategoria > x ){
                        x = larguraDaTela - larguraTotalDivCategoria - 10
                        return itemLancamento.style.marginLeft = `${x}px`
                    } else{
                        return itemLancamento.style.marginLeft = `${x}px`
                    }
    
                }                      
            } 
        })
    }) 
}


function mouseoverItemFilme(){
    var totalItem = document.querySelectorAll('.totalItem')
    var divFilme = document.querySelectorAll('.divFilme')

    totalItem.forEach(posicao => { 
        posicao.addEventListener("mouseover", (event) => { 
            
            if(event.isTrusted === true){
                divFilme.forEach(posicaoTwo => {
                    posicaoTwo.addEventListener("mouseover", (event) => {
                        
                        if(event.isTrusted === true){
                           
                            posicaoTwo.classList.add("divFilme-2X")
                            posicaoTwo.classList.remove("divFilme")
                            
                            let divMylist = posicaoTwo.querySelector(".divMylistPlayInf")
                            if(divMylist){
                                divMylist.style.display = "flex"
                            }  
                        }
                    })
                })
            } 
        })
    })
}


function mouseoutItemFilme(){
    var totalItem = document.querySelectorAll('.totalItem')
    var divFilme = document.querySelectorAll('.divFilme')

    totalItem.forEach(posicao => {
        posicao.addEventListener("mouseout", (event) => {
            if(event.isTrusted === true){
                divFilme.forEach(posicaoTwo => {
                    posicaoTwo.addEventListener("mouseout", (event) => {
                        if(event.isTrusted === true){
                            posicaoTwo.classList.add("divFilme")
                            posicaoTwo.classList.remove("divFilme-2X")

                            let divMylist = posicaoTwo.querySelector(".divMylistPlayInf")
                            if(divMylist){
                                divMylist.style.display = "none"
                            }  
                        } 
                    })
                })
            }
        })  
    })
}




function reticenciasNoFinalSinopse(){
    var elemento = document.querySelectorAll('.resumoFilme')
    var limit = 195

    for (let p of elemento){
        var valorDeCaracteresTextOriginal = p.innerText.length
    }

    for(let p of elemento){
        let totalDeCaracteres = p.innerText.length > limit
        const condicao = totalDeCaracteres ? "..." : ''
        p.innerText = p.innerText.substring(0, limit) + condicao
    }
    
}

    


function mouseoverSinopse(){
    var slide = document.querySelectorAll('.divResumoFilmeSinopse')

    slide.forEach(posicao => {
        posicao.addEventListener("mouseover", (event) =>{
            let resumoFilme = posicao.querySelector('.resumoFilme').style.display = "none"
            let sinopse = posicao.querySelector('.sinopse').style.display = "block"    
        })
    })

    slide.forEach(posicao => {
        posicao.addEventListener("mouseout", (event) =>{
            let resumoFilme = posicao.querySelector('.resumoFilme').style.display = "block"
            let sinopse = posicao.querySelector('.sinopse').style.display = "none"    
        })
    })

}


});


