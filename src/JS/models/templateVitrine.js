import{ListerButtons} from '../controller/buttonsCarrinho.js'
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

        const h3 = document.createElement('h3')
        div.appendChild(h3)
        h3.innerText = `R$ ${item.preco.toFixed(2).replace('.',',')}`

        const button = document.createElement('button')
        div.appendChild(button)
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

export {TemplateVitrine}