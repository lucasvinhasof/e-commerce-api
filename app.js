let endpoint = "https://raw.githubusercontent.com/guilhermeonrails/api-frontend/main/produtos.json"
let produtos = []
let elementoParaInserirProdutos = document.querySelector("ul#produtos__lista")
buscarProdutosDaAPI()

async function buscarProdutosDaAPI() {
    let res = await fetch(endpoint)
    produtos = await res.json()
    console.table(produtos)
    exibirProdutos(produtos)
}

function exibirProdutos(produtos) {
    produtos.forEach(produto => {
        elementoParaInserirProdutos.innerHTML += `<li class="produtos__item">
                    <div class="produtos__content">
                        <img src="${produto.img}" alt="Imagem de celular">
                        <div class="produtos__informacoes">
                            <h3>${produto.nome}</h3>
                            <p>${produto.descricao}</p>
                            <h4>R$${produto.valorComDesconto}<s>R$${produto.valorSemDesconto}</s></h4>
                            <p>Frete GRÁTIS</p>
                        </div>
                    </div>
                </li>`
    })
}