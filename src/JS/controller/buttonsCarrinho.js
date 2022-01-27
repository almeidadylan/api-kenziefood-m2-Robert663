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
.then(data =>    produtos = [...data])

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
                h3totalQuant.innerText = `${totalQuant}`
                h3totalPreco.innerText = `R$ ${totalPreco.toFixed(2).replace('.',',')}`
                arrayCarrinho.find(element => element.id === idClick).quant = 1
                document.getElementById('valoresCarrinho').style.display = 'flex'
            }else{
                totalQuant += 1
                totalPreco += clicado.preco
                h3totalQuant.innerText = `${totalQuant}`
                arrayCarrinho.find(element => element.id === idClick).quant += 1
                h3totalPreco.innerText = `R$ ${totalPreco.toFixed(2).replace('.',',')}`
            }
    }