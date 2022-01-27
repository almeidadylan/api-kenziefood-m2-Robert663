import { ListerButtons } from "../controller/buttonsCarrinho.js"
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
        button.setAttribute('id', `${item.id}`)
        aparec.setAttribute('id',`${item.id}`)
        button.addEventListener('click',ListerButtons.removeCart)

    }

static templateG(array,tagTarget){
    if(array.length !== 0){
        tagTarget.innerHTML = ''
    }
    array.forEach(element => {
        this.templateU(element,tagTarget)
        });
    }
}

export {TemplateCarrinho}