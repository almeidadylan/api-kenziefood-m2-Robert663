let produtos = [
    {
        "id": 1,
        "nome": "Mousse de morango com a fruta",
        "preco": 27.5,
        "categoria": "Frutas",
        "descricao": "Sobremesa fácil, rápida e muito saborosa: a mousse de morango leva apenas 5 ingredientes; confira como fazer a receita",
        "imagem": "https://kenzie-academy-brasil.gitlab.io/fullstack/frontend/modulo2/sprint4/img/capstone-images/mousse.png",
        "createdAt": "2022-01-24T16:25:25.401Z",
        "updatedAt": "2022-01-24T16:25:25.401Z"
    },
    {
        "id": 2,
        "nome": "Panqueca de banana com aveia",
        "preco": 20,
        "categoria": "Panificadora",
        "descricao": "Esta receita serve muito bem 2 pessoas, deixa a gente bem satisfeito, se não tiver outra opção de café. Se tiver mais comida, como pães e frutas.",
        "imagem": "https://kenzie-academy-brasil.gitlab.io/fullstack/frontend/modulo2/sprint4/img/capstone-images/panqueca.png",
        "createdAt": "2022-01-24T16:26:44.903Z",
        "updatedAt": "2022-01-24T16:26:44.903Z"
    },
    {
        "id": 3,
        "nome": "Pastel de verduras vegano",
        "preco": 20,
        "categoria": "Panificadora",
        "descricao": "Todos nós fervemos vegetais, salteamos ou consumimos crus. Mas que tal comer vegetais como se fossem um bolo?",
        "imagem": "https://kenzie-academy-brasil.gitlab.io/fullstack/frontend/modulo2/sprint4/img/capstone-images/pastel.png",
        "createdAt": "2022-01-24T16:27:32.190Z",
        "updatedAt": "2022-01-24T16:27:32.190Z"
    },
    {
        "id": 4,
        "nome": "Pizza vegetariana de palmito",
        "preco": 20,
        "categoria": "Panificadora",
        "descricao": "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document.",
        "imagem": "https://kenzie-academy-brasil.gitlab.io/fullstack/frontend/modulo2/sprint4/img/capstone-images/pizza.png",
        "createdAt": "2022-01-24T16:28:17.326Z",
        "updatedAt": "2022-01-24T16:28:17.326Z"
    },
    {
        "id": 5,
        "nome": "Vinho suave",
        "preco": 20,
        "categoria": "Bebidas",
        "descricao": "O vinho é rico em compostos nutricionais muito importantes para a nossa saúde: os polifenóis. Também auxiliam no sistema imunológico",
        "imagem": "https://kenzie-academy-brasil.gitlab.io/fullstack/frontend/modulo2/sprint4/img/capstone-images/vinho.png",
        "createdAt": "2022-01-24T16:29:02.015Z",
        "updatedAt": "2022-01-24T16:29:02.015Z"
    },
    {
        "id": 6,
        "nome": "Laranja Pera Fresca Kenzie 5kg",
        "preco": 20,
        "categoria": "Frutas",
        "descricao": "Bastante popular no Brasil, a laranja é uma das maiores representantes das frutas cítricas. Seu sabor costuma ser doce ou levemente ácido",
        "imagem": "https://kenzie-academy-brasil.gitlab.io/fullstack/frontend/modulo2/sprint4/img/capstone-images/laranja.png",
        "createdAt": "2022-01-24T16:29:44.513Z",
        "updatedAt": "2022-01-24T16:29:44.513Z"
    }
]
let arrayCarrinho = []
let totalPreco = 0
let totalQuant = 0
class TemplateVitrine{
    static templateU(item,tagTarget){
        
        const div = document.createElement('div')
        const div2 = document.createElement('div')
        const figure = document.createElement('figure')
        const img = document.createElement('img')
        const figcaption = document.createElement('figcaption')
        const h2 = document.createElement('h2')
        const parag = document.createElement('p')
        const h3 = document.createElement('h3')
        const button = document.createElement('button')
        let aparec = document.createElement('i')
        const teste = document.createElement('div')


        tagTarget.appendChild(div)
        div.setAttribute('class','cardV')
        div.appendChild(figure)
        div2.setAttribute('class', 'div-categoria')
        img.src = item.imagem
        img.alt = item.descricao
        img.setAttribute('class', 'testando')
        figure.appendChild(img)
        div2.appendChild(figcaption)
        figcaption.innerHTML = `<img src=./src/CSS/assets/Icon_${item.categoria}.svg alt=""> ${item.categoria}`
        figure.appendChild(figcaption)
        div.appendChild(h2)
        h2.innerText = item.nome
        parag.innerText = item.descricao 
        div.appendChild(parag)
        parag.setAttribute('class', 'testando2')
        div.appendChild(h3)
        h3.innerText = `R$ ${item.preco.toFixed(2).replace('.',',')}`
        div.appendChild(button)
        button.appendChild(aparec)
        aparec.setAttribute('class','fa fa-cart-arrow-down')
        teste.appendChild(h3)
        teste.appendChild(button)
        teste.setAttribute('id', 'teste')
        div.appendChild(teste)
        button.setAttribute('class', 'btn-adicionar-carrinho')
    }
    static templateG(array,tagTarget){
        tagTarget.innerHTML = ''
        array.forEach(element => {
            this.templateU(element,tagTarget)
        });
    }
}
TemplateVitrine.templateG(produtos,document.getElementById('vitrine'))
class TemplateCarrinho{
    static templateU(item,tagTarget){
    const div = document.createElement('div')
    tagTarget.appendChild(div)
    div.setAttribute('class','cardC')
    const img = document.createElement('img')
    img.src = item.imagem
    img.alt = item.descricao
    div.appendChild(img)
    const div2 = document.createElement('div')
    div.appendChild(div2)
    const h2 = document.createElement('h2')
    div2.appendChild(h2)
    h2.innerText = item.nome
    const h3 = document.createElement('h3')
    div2.appendChild(h3)
    h3.innerText = item.categoria
    const h4 = document.createElement('h4')
    div2.appendChild(h4)
    h4.innerText = `R$ ${item.preco.toFixed(2).replace('.',',')}`
    const button = document.createElement('button')
    div.appendChild(button)
    let aparec = document.createElement('i')
    button.appendChild(aparec)
    aparec.setAttribute('class','fa fa-trash')
    img.setAttribute('class', 'imagens-carrinho')
    div2.setAttribute('class', 'descricao')
    h2.setAttribute('class', 'h2')
    h3.setAttribute('class', 'h3')
    h4.setAttribute('class', 'h4')
    button.setAttribute('class', 'btn-delete')
}
static templateG(array,tagTarget){
    tagTarget.innerHTML = ''
    array.forEach(element => {
        this.templateU(element,tagTarget)
    });
}
}
TemplateCarrinho.templateG(produtos,document.getElementById('carrinho'))

