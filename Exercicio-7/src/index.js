const express = require('express')
const app = express()
var fs = require('fs')
const {randomUUID} = require("crypto")
var cors = require('cors')

var fileName = 'foods.json';
var enderecoPedidos = 'pedidoRecebido.json';

app.use(express.json())
app.use(cors({
    origin: '*',
}))

var foods = []
var pedidos = []

fs.readFile(fileName, (err, data) => {
    if (err) {
        console.log(err);
    }

    foods = JSON.parse(data);
})

fs.readFile(enderecoPedidos, (err, comida) => {
    if (err) {
        console.log(err);
    }

    pedidos = JSON.parse(comida);
})

app.get('/', (request, response) => {
    return response.json({message: "Rota index funcionando!"})
})

app.get('/foods', (request, response) => {
    return response.json(foods);
    
})

app.get('/pedidoRecebido', (request, response) => {
    return response.json(pedidos);
    
})

app.get('/foods/:id', (request, response) => {
    const { id }  = request.params

    let listaDeComida = foods.find((comida) => comida.id === id )
    
    if (listaDeComida == undefined){
        return response.json("Erro: ID não encontrado!") 
    }
   
    return response.json(listaDeComida)          /* message: "Rota consultar pelo ID!" */
   
})

app.get('/pedidoRecebido/:id', (request, response) => {
    const { id }  = request.params

    let listaDeComida = pedidos.find((comida) => comida.id === id )
    
    if (listaDeComida == undefined){
        return response.json("Erro: ID não encontrado!") 
    }
   
    return response.json(listaDeComida)          /* message: "Rota consultar pelo ID!" */
   
})

app.post('/foods', (request, response) => {
    const { Nome, Tamanho, Imagem }= request.body
    const id =  randomUUID() 

    foods.push({id, Nome, Tamanho, Imagem})
        
    escreverFoodsJson()

    return response.json(foods)

})

app.post('/pedidoRecebido', (request, response) => {
    const { Nome, Tamanho }= request.body
    const id =  randomUUID() 

    pedidos.push({id, Nome, Tamanho})
        
    escreverPedidosJson()

    return response.json(pedidos)

})

app.put('/foods/:id', (request, response) => {
    const { Nome, Tamanho } = request.body
    const { id } = request.params 

    let listaDeComida = foods.find((comida) => comida.id === id )

    if(listaDeComida == undefined){
        return response.json("Erro: ID não encontrado!")      /*message: "Rota substituir comida!"*/
    }

    listaDeComida.Nome = Nome
    listaDeComida.Tamanho = Tamanho 

    escreverFoodsJson()

    return response.json(foods)
})

app.put('/pedidoRecebido/:Nome', (request, response) => {
    const { Nome, Tamanho } = request.body
    const { id } = request.params 

    let listaDeComida = pedidos.find((comida) => comida.Nome === Nome )
    console.log(listaDeComida)

    listaDeComida.Nome = Nome
    listaDeComida.Tamanho = Tamanho
        
  

    escreverPedidosJson()

    return response.json(pedidos)
})

app.delete('/foods/:id', (request, response) => {
    const { id } = request.params

    let listaDeComida = foods.findIndex((comida) => comida.id === id )

    if(listaDeComida === -1){
        return response.json("Erro: ID não encontrado!")  
    }

    foods.splice(listaDeComida, 1)

    escreverFoodsJson()

    return response.json({message: "Comida deletado com sucesso!"})  

})

app.delete('/pedidoRecebido/:Nome', (request, response) => {
    const { Nome } = request.params

    let listaDeComida = pedidos.findIndex((comida) => comida.Nome === Nome )

    if(listaDeComida === -1){
        return response.json("Erro: ID não encontrado!")  
    }

    pedidos.splice(listaDeComida, 1)

    escreverPedidosJson()

    return response.json({message: "Comida deletada com sucesso!"})  

})

function escreverFoodsJson(){
    fs.writeFile(fileName, JSON.stringify(foods), err => {
        if (err) {
        console.error(err);
        }
            
    });

}

function escreverPedidosJson(){
    fs.writeFile(enderecoPedidos, JSON.stringify(pedidos), err => {
        if (err) {
        console.error(err);
        }
            
    });

}

app.listen(3000, () => {
    console.log("Conectado!")
})