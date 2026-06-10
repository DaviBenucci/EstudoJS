// TODO: Funções em JavaScript

//? Função Padrão

function saudação(nome) {
    return `Bom dia ${nome}`
}

const variavel = saudação("Davi")
// console.log(variavel)

// Ás funções são blocos de código separados do código principal aonde o código fora da função não 
// consegue interferir no que está dentro da função. 


// function example() ← Esse () ao lado do nome da função é chamado de parâmetro, com ele podemos 
// informar um parâmetro na função para ser executado.
// ↓ Nesse exemplo mandamos dois valores no parâmetro para que ele retorne a soma desses dois valores

function somar(x, y) { 
    return Number(x + y) // A partir de quando o motor do JS encontra o return, ele para de ler a função
}

console.log(somar("Davi", "Israel"))


function soma(x = 1, y = 1) {
    return Number(x + y) // Se não for específicado o X e nem o Y eles vão continuar valendo 1, pois foi o que eu coloquei no parâmetro
}

console.log(soma(2, 2)) // agora se eu modificar o parâmetro ele vai passar a utilizar o que eu coloquei aqui.

//? Função anônima 

const raiz = function (n) {
    return n ** 0.5
}

console.log(raiz(144))


//? ARROW FUNCTION

const arrow = (n) => {
    return n ** 0.5
}

const oneLine = (n) => n ** 0.5 // Se na função houver somente uma linha, 
// podemos remover os parênteses e o return utilizando o => para simplificarmos mais o código