import {ListerButtons} from './controller/buttonsCarrinho.js'
import {ListenerFiltro} from './controller/filtroBusca.js'
import {TemplateCarrinho} from './models/templateCarrinho.js'
import {TemplateVitrine} from './models/templateVitrine.js'
import {FetchProdutos} from './router/fetchAPI.js'
let produtos = []
let arrayCarrinho = []
let totalPreco = 0
let totalQuant = 0
const h3totalPreco = document.getElementById('totalPreco')
const h3totalQuant = document.getElementById('totalQuant')
ListenerFiltro.addListenerHeader()

FetchProdutos.buscandoProdutos()
.then(data => {
    produtos = [...data]
    TemplateVitrine.templateG(data,document.getElementById('vitrine'))
    }
) 