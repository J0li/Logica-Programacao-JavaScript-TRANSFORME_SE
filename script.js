// A compra na PokéMart
const precoPokebola = 200;
const qtdPokebolas = 3;
const precoPocao = 300;
const qtdPocoes = 2;
const desconto = 50;

// >>> Escreva sua solução aqui let parcela = 3 parcelado = total / parcela  ${}%`<<<
function calculo(precoPokebola, qtdPokebolas, precoPocao, qtdPocoes, desconto) {
    const totalCompra = (precoPokebola * qtdPokebolas) + (precoPocao * qtdPocoes);
    const totalComDesconto = totalCompra - desconto;
    return { totalCompra, totalComDesconto };
}

console.log(`Total a pagar: ${totalCompra}`);
console.log(`Total a pagar: ${totalCompraComDesconto}`);

// Inscrição no Exame Chunin
const idade = 10;
const temEquipe = true;
// >>> Escreva sua solução aqui <<<