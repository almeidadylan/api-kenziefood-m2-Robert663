const todos = document.querySelector("#todos");
const panificadora = document.querySelector("#panificadora");
const frutas = document.querySelector("#frutas");
const bebidas = document.querySelector("#bebidas");
const article = document.querySelector("article");

todos.addEventListener("click", function(e){

    e.preventDefault;

    fetch('https://kenzie-food-api.herokuapp.com/product')
    .then(response => response.json())
    .then(dados => {

        article.innerHTML = "";

        for(let i = 0; i < dados.length; i++){
            const img = document.createElement("img");
            article.appendChild(img);
            img.src = dados[i].imagem;
    }
})
});

panificadora.addEventListener("click", function(e){

    e.preventDefault;

    fetch('https://kenzie-food-api.herokuapp.com/product')
    .then(response => response.json())
    .then(dados => {

        article.innerHTML = "";

        for(let i = 0; i < dados.length; i++){
            if(dados[i].categoria === 'Panificadora'){
                const img = document.createElement("img");
                article.appendChild(img);
                img.src = dados[i].imagem;
            }
    }
})
});

frutas.addEventListener("click", function(e){

    e.preventDefault;

    fetch('https://kenzie-food-api.herokuapp.com/product')
    .then(response => response.json())
    .then(dados => {

        article.innerHTML = "";

        for(let i = 0; i < dados.length; i++){
            if(dados[i].categoria === 'Frutas'){
                const img = document.createElement("img");
                article.appendChild(img);
                img.src = dados[i].imagem;
            }
    }
})
});

bebidas.addEventListener("click", function(e){

    e.preventDefault;

    fetch('https://kenzie-food-api.herokuapp.com/product')
    .then(response => response.json())
    .then(dados => {

        article.innerHTML = "";

        for(let i = 0; i < dados.length; i++){
            if(dados[i].categoria === 'Bebidas'){
                const img = document.createElement("img");
                article.appendChild(img);
                img.src = dados[i].imagem;
            }
    }
})
});