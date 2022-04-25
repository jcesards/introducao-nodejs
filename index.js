const express = require("express")
const app = express()
const port = 3000

function pair1(request, response) {
    return response.send("Julio")
}

function nomeCompleto(request, response) {
    var nome = "Julio"
    var sobreNome = "Cesar"    
    return response.send(`Seu nome completo é: ${nome} ${sobreNome}`)
}

function soma(request, response) {
    var n1 = request.params.num1
    var n2 = request.params.num2
    var resultado = parseInt(n1) + parseInt(n2)
    return response.send(`A soma dos numeros foi: ${resultado}`)
}

function subtracao(request, response) {
    var n1 = request.params.num1
    var n2 = request.params.num2
    var resultado = parseInt(n1) - parseInt(n2)
    return response.send(`A subtração dos numeros foi: ${resultado}`)
}

function divisao(request, response) {
    var n1 = request.params.num1
    var n2 = request.params.num2
    var resultado = parseInt(n1) / parseInt(n2)
    return response.send(`A divisão dos numeros foi: ${resultado.toFixed(2)}`)
}

function multiplicacao(request, response) {
    var n1 = request.params.num1
    var n2 = request.params.num2
    var resultado = parseInt(n1) * parseInt(n2)
    return response.send(`A multiplicação dos numeros foi: ${resultado}`)
}
function media(request, response) {
    var nota1 = request.params.n1
    var nota2 = request.params.n2
    var nota3 = request.params.n3 
    var resultado = (parseFloat(nota1) + parseFloat(nota2) + parseFloat(nota3)) / 3
    return response.send(`A media das notas: ${resultado.toFixed(2)}`)
}

app.get("/", pair1)
app.get("/nome", nomeCompleto)
app.get("/soma/:num1/:num2", soma)
app.get("/subtracao/:num1/:num2", subtracao)
app.get("/divisao/:num1/:num2", divisao)
app.get("/multiplicacao/:num1/:num2", multiplicacao)
app.get("/media/:n1/:n2/:n3", media)

app.listen(port, () => {
    console.log("http://localhost:3000")
})



// GET, POST, PUT, DELETE

// function helloWorld(request, response) {
//     return response.send("Olá mundo!")
// }

// function soma(request, response) {
//     const n1 = request.params.pokemon
//     const n2 = request.params.numero2

//     const resultado = parseInt(n1) + parseInt(n2)
//     return response.send(`A soma dos numeros foi: ${resultado}`)
// }
// app.get("/", helloWorld)
// app.get("/soma/:pokemon/:numero2", soma)

// app.post("/produto", (request, response) => {
//     return response.send("produto 1")
// })