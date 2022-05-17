class FetchProdutos{
    static async buscandoProdutos(){
        let array = []
        let response = await fetch('https://kenzie-food-typescript.herokuapp.com/products')
        let dados = await response.json()
        .then(dados =>{
            console.log(dados)
            dados.forEach(element =>{
                array.push(element)
            })
        })
        return array
    }
}

export {FetchProdutos}