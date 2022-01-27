import {TemplateVitrine} from '../models/templateVitrine.js'
import {FetchProdutos} from '../router/fetchAPI.js'
let produtos = []
FetchProdutos.buscandoProdutos()
.then(data => data.forEach(element => produtos.push(element)))

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
            }else{
                vitrine.innerHTML = ''
                const h6 = document.createElement('h6')
                vitrine.appendChild(h6)
                h6.innerText = 'Produtos não encontrados'
            }
        })
    }
    static tiposFiltros(event){
        let produtosFiltrados = []
        vitrine.innerHTML = '';
        const click = event.target;
        if(click.id === 'todos'){
            TemplateVitrine.templateG(produtos, vitrine)
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
                TemplateVitrine.templateG(resultado, vitrine)
            } else{
                vitrine.innerHTML = ''
                const h6 = document.createElement('h6')
                vitrine.appendChild(h6)
                h6.innerText = 'Produtos não encontrados'
            }
        } else{
            produtosFiltrados = produtos.filter(element => element.categoria.toLowerCase() === click.id)
            TemplateVitrine.templateG(produtosFiltrados, vitrine)
        }
    }
}

export {ListenerFiltro}











