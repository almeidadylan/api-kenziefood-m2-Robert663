let result = []

    let produtos = fetch('https://kenzie-food-api.herokuapp.com/product')
    .then(response => response.json())
    .then(data => {
        result.push(data)
    })
    console.log(produtos);
    console.log(result);

// let arrayCarrinho = []
// let totalPreco = 0
// let totalQuant = 0
// class TemplateVitrine{
//     static templateU(item,tagTarget){
//         const div = document.createElement('div')
//         const figure = document.createElement('figure')
//         const img = document.createElement('img')
//         const figcaption = document.createElement('figcaption')
//         const h2 = document.createElement('h2')
//         const parag = document.createElement('p')
//         const h3 = document.createElement('h3')
//         const button = document.createElement('button')
//         let aparec = document.createElement('i')
//         const teste = document.createElement('div')
//         tagTarget.appendChild(div)
//         div.setAttribute('class','cardV')
//         div.appendChild(figure)
//         img.src = item.imagem
//         img.alt = item.descricao
//         img.setAttribute('class', 'testando')
//         figure.appendChild(img)
//         div.appendChild(figcaption)
//         figcaption.innerHTML = `<img src=./src/CSS/assets/Icon_${item.categoria}.svg alt=""> ${item.categoria}`
//         figure.appendChild(figcaption)
//         div.appendChild(h2)
//         h2.innerText = item.nome
//         parag.innerText = item.descricao 
//         div.appendChild(parag)
//         parag.setAttribute('class', 'testando2')
//         div.appendChild(h3)
//         h3.innerText = `R$ ${item.preco.toFixed(2).replace('.',',')}`
//         div.appendChild(button)
//         button.appendChild(aparec)
//         aparec.setAttribute('class','fa fa-cart-arrow-down')
//         teste.appendChild(h3)
//         teste.appendChild(button)
//         teste.setAttribute('id', 'teste')
//         div.appendChild(teste)
//     }
//     static templateG(array,tagTarget){
//         tagTarget.innerHTML = ''
//         array.forEach(element => {
//             this.templateU(element,tagTarget)
//         });
//     }
// }
// TemplateVitrine.templateG(produtos,document.getElementById('vitrine'))
// class TemplateCarrinho{
//     static templateU(item,tagTarget){
//     const div = document.createElement('div')
//     tagTarget.appendChild(div)
//     div.setAttribute('class','cardC')
//     const img = document.createElement('img')
//     img.src = item.imagem
//     img.alt = item.descricao
//     div.appendChild(img)
//     const div2 = document.createElement('div')
//     div.appendChild(div2)
//     const h2 = document.createElement('h2')
//     div2.appendChild(h2)
//     h2.innerText = item.nome
//     const h3 = document.createElement('h3')
//     div2.appendChild(h3)
//     h3.innerText = item.categoria
//     const h4 = document.createElement('h4')
//     div2.appendChild(h4)
//     h4.innerText = `R$ ${item.preco.toFixed(2).replace('.',',')}`
//     const button = document.createElement('button')
//     div.appendChild(button)
//     let aparec = document.createElement('i')
//     button.appendChild(aparec)
//     aparec.setAttribute('class','fa fa-trash')
// }
// static templateG(array,tagTarget){
//     tagTarget.innerHTML = ''
//     array.forEach(element => {
//         this.templateU(element,tagTarget)
//     });
// }
// }
// // TemplateCarrinho.templateG(produtos,document.getElementById('carrinho'))