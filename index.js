const express = require("express")
const app = express()
const bodyParser = require("body-parser")
const connection = require("./database/database")
const perguntaModel = require("./database/Pergunta")

//Database

connection
    .authenticate()
    .then(() => {
        console.log("Conexão feita com o banco de dados")
    })
    .catch((erro) => {

        console.log(erro)
    })

app.set("view engine", "ejs")
app.use(express.static("public"))

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get("/", (req, res) => {

    res.render("index")

})

app.get("/perguntar", (req, res) => {

    res.render("perguntar")
})

app.post("/salvarpergunta", (req, res) => {

    var titulo = req.body.titulo
    var descricao = req.body.descricao

    res.send("Formulário recebido")
})

app.listen(3000, () => {

    console.log("App rodando")
})