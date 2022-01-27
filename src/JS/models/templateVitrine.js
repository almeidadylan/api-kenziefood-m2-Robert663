import{ListerButtons} from '../controller/buttonsCarrinho.js'
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
        button.setAttribute('id', `${item.id}`)
        aparec.setAttribute('id', `${item.id}`)
        button.addEventListener('click',ListerButtons.addCart)
    }
    static templateG(array,tagTarget){
        tagTarget.innerHTML = ''
        array.forEach(element => {
            this.templateU(element,tagTarget)
        });
    }
}

export {TemplateVitrine}