let body =document.querySelector("body")
let tenis =document.querySelector(".imagem-tenis")
let adicionaraoCarrinho = document.querySelector(".link-carrinho")

function mudarVisual(cor, imagem){

    tenis.classList.add("troca-efeito")
    
    body.style.background = cor
    adicionaraoCarrinho.style.background= cor
    
    setTimeout(()=> {
        tenis.src = imagem
        tenis.classList.remove("troca-efeito")

    }, 500)
    
}

