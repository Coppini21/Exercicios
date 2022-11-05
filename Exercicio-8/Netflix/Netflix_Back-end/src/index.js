const express = require('express')
const app = express()
const bodyParser = require("body-parser")
const {randomUUID} = require("crypto")
var cors = require('cors');
app.use(bodyParser.json())

app.use(cors({
    origin: '*'
}))

const knex = require('knex')({
    client: 'mysql',
    connection: {
      host : '127.0.0.1',
      port : 3306,
      user : 'root',
      password : 'root',
      database : 'aula21'
    }
  });


app.get('/usuarios', async function (req, res) {
    const users = await knex('usuarios')

    return res.json(users) 
})

app.get('/filmes', async function (req, res) {
    const filmes = await knex('filmes').join('categorias',  'categorias.id', '=', 'filmes.categoria_id').select('*')


    return res.json(filmes) 
})

app.get('/assistidos/:id', async function (req, res) {
    const usuario = req.params.id
    const filmes = await knex('assistidos').join('usuarios',  'usuarios.id', '=', 'assistidos.usuario_id').join('filmes',  'filmes.id', '=', 'assistidos.filme_id').select('assistidos.usuario_id', 'usuarios.nome', 'filmes.nome', 'filmes.capa').where('assistidos.usuario_id', usuario )


    return res.json(filmes) 
})


app.post('/usuarios/', function (req, res) {
    const usuario = req.body
    usuario.id = randomUUID()

    usuarios.push(usuario)

    return res.json({message: "Usuaário criado com sucesso!", data: usuario})
})

app.put('/usuarios/:id', function (req, res) {
    const { nome } = req.body
    let { id } = req.params

    let comparacaoId = usuarios.findIndex((identificacaoId) => identificacaoId.id === id)

    if(comparacaoId !== -1 ){
        usuarios[comparacaoId].nome = nome
        return res.json(usuarios)
    } else {
        return res.json("ID não encontrado!")
    }
    
})

app.delete('/usuarios/:id', function (req, res) {
    let { id } = req.params

    let comparacaoId = usuarios.findIndex((identificacaoId) => identificacaoId.id === id)

    if(comparacaoId !== -1 ){
        usuarios.splice(comparacaoId, 1)
        return res.json("Usuário deletado com sucesso!")
    } else {
        return res.json("ID não encontrado!")
    }
})

app.listen(3000)