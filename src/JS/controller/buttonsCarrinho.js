import {FetchProdutos} from '../router/fetchAPI.js'
import {TemplateVitrine} from '../models/templateVitrine.js'
import {TemplateCarrinho} from '../models/templateCarrinho.js'
let produtos = []
let arrayCarrinho = []
let totalPreco = 0
let totalQuant = 0

const h3totalPreco = document.getElementById('totalPreco')
const h3totalQuant = document.getElementById('totalQuant')
FetchProdutos.buscandoProdutos()
.then(data => {
    data.forEach(element => produtos.push(element))
    TemplateVitrine.templateG(data,document.getElementById('vitrine'))
}
)
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

export {ListerButtons}