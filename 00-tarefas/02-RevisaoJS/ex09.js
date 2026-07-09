// Desafio - Loja

// Crie:

// produto
// preco
// quantidade

// Calcule:

// total = preco * quantidade

// Se o total for maior que R$500:

// Desconto de 15%

// Caso contrário:

// Sem desconto

// Mostre o total.

let produto = "arroz"
let preco = 39.9
let quant = 30

let total = preco * quant

if( total > 500){
    console.log(`desconto de 15%`);
}
else {
    console.log(`Não tem desconto`);
}