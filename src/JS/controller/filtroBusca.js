import {TemplateVitrine} from '../models/templateVitrine.js'
import {FetchProdutos} from '../router/fetchAPI.js'
let produtos = []
FetchProdutos.buscandoProdutos()
.then(data =>   produtos = [...data])

const vitrine = document.getElementById('vitrine')
class ListenerFiltro{
    static filtroAtivo(pesquisa){
        pesquisa = pesquisa.toLowerCase().trim()
        const produtosFiltrados = produtos.filter(function(produto){
            const {nome} = produto
            if(nome.toLowerCase().includes(pesquisa)){
                return produto
            }
        })
        return produtosFiltrados;
    }
    static addListenerHeader(){
        const buttonsFiltros = document.getElementsByTagName('button')
        for(let i = 0; i < 5; i++){
            buttonsFiltros[i].addEventListener('click', this.tiposFiltros);
        }
        document.getElementById("searchBar").addEventListener("keyup", function(event){
            const buscaInput = event.target.value
            const resultadoBusca  = ListenerFiltro.filtroAtivo(buscaInput)
            if(resultadoBusca.length !== 0){
                TemplateVitrine.templateG(resultadoBusca, vitrine)