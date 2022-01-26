let produtos = []

let arrayCarrinho = []
let totalPreco = 0
let totalQuant = 0

const h3totalPreco = document.getElementById('totalPreco')
const h3totalQuant = document.getElementById('totalQuant')

class ListerButtons{
    static addCart(){
        const cliquei = event.target;
        const idClick = parseFloat(cliquei.id)
        const clicado = produtos.find(element => element.id === idClick)
            if(!(arrayCarrinho.includes(clicado))){
                arrayCarrinho.push(clicado)
                TemplateCarrinho.templateG(arrayCarrinho,document.getElementById('carrinho'))
                totalQuant += 1
                totalPreco += clicado.preco
                h3totalQuant.innerText = `Quantidade ${totalQuant}`
                h3totalPreco.innerText = `R$ ${totalPreco.toFixed(2).replace('.',',')}`
                arrayCarrinho.find(element => element.id === idClick).quant = 1
            }else{
                totalQuant += 1
                totalPreco += clicado.preco
                h3totalQuant.innerText = `Quantidade ${totalQuant}`
                arrayCarrinho.find(element => element.id === idClick).quant += 1
                h3totalPreco.innerText = `R$ ${totalPreco.toFixed(2).replace('.',',')}`
            }
    }
    static removeCart(){
        const cliquei = event.target;
        const idClick = Number(cliquei.id)
        // parseFloat(cliquei.id)
        const clicado = arrayCarrinho.find(element => element.id == idClick)
        totalQuant  -= clicado.quant
        totalPreco -= (clicado.quant)*(clicado.preco)
        if(totalQuant <= 0){
            h3totalQuant.innerText = ''
            h3totalPreco.innerText = ''
            totalQuant = 0
        } else{
            h3totalQuant.innerText = `Quantidade ${totalQuant}`
            h3totalPreco.innerText = `R$ ${totalPreco.toFixed(2).replace('.',',')}`
        }
        arrayCarrinho.splice(clicado,1)
        TemplateCarrinho.templateG(arrayCarrinho,document.getElementById('carrinho'))
    }
}

class TemplateVitrine{
    static templateU(item,tagTarget){
        const div = document.createElement('div')
        tagTarget.appendChild(div)
        div.setAttribute('class','cardV')

        const figure = document.createElement('figure')
        div.appendChild(figure)

        const img = document.createElement('img')
        img.src = item.imagem
        img.alt = item.descricao
        img.setAttribute('class', 'testando')
        figure.appendChild(img)

        const figcaption = document.createElement('figcaption')
        div.appendChild(figcaption)
        figcaption.innerHTML = `<img src=./src/CSS/assets/Icon_${item.categoria}.svg alt=""> ${item.categoria}`
        figure.appendChild(figcaption)

        const h2 = document.createElement('h2')
        div.appendChild(h2)
        h2.innerText = item.nome

        const parag = document.createElement('p')
        div.appendChild(parag)
        parag.innerText = item.descricao

        const div3 = document.createElement('div')
        div.appendChild(div3)
        div3.setAttribute('class', 'teste')

        const h3 = document.createElement('h3')
        div3.appendChild(h3)
        h3.innerText = `R$ ${item.preco.toFixed(2).replace('.',',')}`

        const button = document.createElement('button')
        div3.appendChild(button)
        button.setAttribute('id',item.id)
        button.setAttribute('class','btn-adicionar-carrinho')
        button.innerHTML = `<i class="fa fa-cart-arrow-down" id="${item.id}"></i>`
        /*let aparec = document.createElement('i')
        button.appendChild(aparec)
        aparec.setAttribute('class','fa fa-cart-arrow-down')
        aparec.setAttribute('id',item.id)
        aparec.addEventListener('click',addCart)*/
        button.addEventListener('click',ListerButtons.addCart)
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
    img.setAttribute('class', 'testando')
    img.setAttribute('class', 'imagens-carrinho')
    div.appendChild(img)
    
    const div2 = document.createElement('div')
    div.appendChild(div2)
    div2.setAttribute('class', 'descricao')
    
    const h2 = document.createElement('h2')
    div2.appendChild(h2)
    h2.innerText = item.nome
    h2.setAttribute('class', 'h2')

    const h3 = document.createElement('h3')
    div2.appendChild(h3)
    h3.setAttribute('class', 'h3')
    h3.innerText = item.categoria

    const h4 = document.createElement('h4')
    div2.appendChild(h4)
    h4.innerText = `R$ ${item.preco.toFixed(2).replace('.',',')}`
    h4.setAttribute('class', 'h4')

    const button = document.createElement('button')
    button.innerHTML = `<i class="fa fa fa-trash" id="${item.id}"></i>`
    div.appendChild(button)
    button.id = item.id
    button.setAttribute('class', 'btn-delete')
    //button.setAttribute('class','btn-remover-carrinho')
    // let aparec = document.createElement('i')
    // button.appendChild(aparec)
    // aparec.setAttribute('class','fa fa-trash')
    // button.addEventListener('click',removeCart)
    button.addEventListener('click',ListerButtons.removeCart)
}
static templateG(array,tagTarget){
    tagTarget.innerHTML = ''
    array.forEach(element => {
        this.templateU(element,tagTarget)
    });
}

}

class ListenerFiltro{

    static addListenerHeader(){
        const buttonsFiltros = document.getElementsByTagName('button')
        for(let i = 0; i < 5; i++){
            buttonsFiltros[i].addEventListener('click', this.tiposFiltros);
        }
    }
    
    static tiposFiltros(event){
        let produtosFiltrados = []
        document.getElementById('vitrine').innerHTML = '';
        const click = event.target;
        if(click.id === 'todos'){
            TemplateVitrine.templateG(produtos, document.getElementById('vitrine'))
        } else if(click.id === 'buttonSearch'){
            const palavra = document.getElementById('searchBar').value.toLowerCase()
            let resultado = []
            produtos.forEach(element =>{
                let elemento = element.nome.toLowerCase()
                if(elemento.includes(palavra)){
                    resultado.push(element)
                }
            })
            if(resultado.length !== 0){
                TemplateVitrine.templateG(resultado, document.getElementById('vitrine'))
            } else{
                document.getElementById('vitrine').innerHTML = ''
                const h2 = document.createElement('h2')
                document.getElementById('vitrine').appendChild(h2)
                h2.innerText = `Produtos não encontrados`
            }
        } else{
            produtosFiltrados = produtos.filter(element => element.categoria.toLocaleLowerCase() === click.id)
            TemplateVitrine.templateG(produtosFiltrados, document.getElementById('vitrine'))
        }
    }
}
ListenerFiltro.addListenerHeader()

class FetchProdutos{
    static async buscandoProdutos(){
        let array = []
        let response = await fetch('https://kenzie-food-api.herokuapp.com/product')
        let dados = await response.json()
        .then(dados =>{
            dados.forEach(element =>{
                array.push(element)
            })
        })
        return array
    }
}

FetchProdutos.buscandoProdutos()
.then(data => {
    data.forEach(element => produtos.push(element))
    TemplateVitrine.templateG(data,document.getElementById('vitrine'))
}
)