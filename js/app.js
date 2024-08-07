let carrinhoDeCompras = document.getElementById('lista-produtos');
let valorTotal = document.getElementById('valor-total');
let somatoriaValores = 0;

function adicionar() {
    let inputDropdown = document.getElementById('produto').value;
    let nomeProduto = inputDropdown.split(' -')[0];
    let quantidade = document.getElementById('quantidade').value;
    let precoProduto = parseInt(inputDropdown.split('$')[1]) * parseInt(quantidade);

    if(quantidade <= 0) {
        alert('Insira um valor de quantidade válido!')
    } else {
        carrinhoDeCompras.innerHTML = carrinhoDeCompras.innerHTML + `<section class="carrinho__produtos__produto">
        <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$ ${precoProduto}</span>
        </section>`;

        somatoriaValores = somatoriaValores + precoProduto;
        valorTotal.innerHTML = `R$ ${somatoriaValores}`;

        document.getElementById('quantidade').value = '1'
    }
}

function limpar() { 
    somatoriaValores = 0;
    carrinhoDeCompras.innerHTML = '';
    valorTotal.innerHTML = 'R$ 0';
}