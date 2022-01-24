let teste = []

fetch('https://kenzie-food-api.herokuapp.com/product')
.then(response => response.json())
.then(dados => {
    dados.forEach(element => {
    teste.push(element)
})
    console.log(teste)
    console.log(dados)})

console.log(teste);