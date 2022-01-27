import{ListerButtons} from '../controller/buttonsCarrinho.js'
class TemplateVitrine{
    static templateU(item,tagTarget){
        
        const div = document.createElement('div')
        tagTarget.appendChild(div)

        const div2 = document.createElement('div')
        
        
        const figure = document.createElement('figure')
        div.appendChild(figure)
        
        const img = document.createElement('img')
        img.alt = item.descricao
        img.src = item.imagem
        figure.appendChild(img)
        
        const figcaption = document.createElement('figcaption')
        div2.appendChild(figcaption)
        figcaption.innerHTML = `<img src=./src/CSS/assets/Icon_${item.categoria}.svg alt=""> ${item.categoria}`
        figure.appendChild(figcaption)
        
        const h2 = document.createElement('h2')
        div.appendChild(h2)
        h2.innerText = item.nome

        const parag = document.createElement('p')
        div.appendChild(parag)
        parag.innerText = item.descricao 
        
        const h3 = document.createElement('h3')
        div.appendChild(h3)
        h3.innerText = `R$ ${item.preco.toFixed(2).replace('.',',')}`

        const valoresVitrine = document.createElement('div')
        div.appendChild(valoresVitrine)
        valoresVitrine.appendChild(h3)

        const button = document.createElement('button')
        valoresVitrine.appendChild(button)
        
        let aparec = document.createElement('i')
        button.appendChild(aparec)
        
        div.setAttribute('class','cardV')
        div2.setAttribute('class', 'div-categoria')
        img.setAttribute('class', 'cardImage')
        valoresVitrine.setAttribute('id', 'valoresVitrine')
        button.setAttribute('class', 'btn-adicionar-carrinho')
        button.setAttribute('id', `${item.id}`)
        aparec.setAttribute('class','fa fa-cart-arrow-down')
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