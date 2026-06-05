// //Funções em JavaScript

// function saudação(nome) {
//     return `Bom dia ${nome}`
// }

// const variavel = saudação("Davi")
// // console.log(variavel)

// Ás funções são blocos de código separados do código principal aonde o código fora da função não 
// consegue interferir no que está dentro da função. 


// function example() ← Esse () ao lado do nome da função é chamado de parâmetro, com ele podemos 
// informar um parâmetro na função para ser executado.
// ↓ Nesse exemplo mandamos dois valores no parâmetro para que ele retorne a soma desses dois valores

function somar(x, y) { 
    return Number(x + y) // A partir de quando o motor do JS encontra o return, ele para de ler a função
}

console.log(somar("Davi", "Israel"))