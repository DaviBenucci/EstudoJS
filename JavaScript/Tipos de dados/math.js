let num1 = 144

console.log("Math Floor--", Math.floor(num1)) // Utilizado para arredondamento do número para baixo
console.log("Math Ceil--", Math.ceil(num1)) // Utilizado para arredondamento do número para cima
console.log("Math Round--", Math.round(num1)) //Ele arredonda automáticamente o valor para cima ou para baixo

console.log("Math Max--",Math.max(1, 2, 3, 4, 5, 5, 6, 7, 8, 9, 134, 67, 128, 1234, 14, 1)) // Retorna o maior número 
console.log("Math min--",Math.min(1, 2, 3, 4, 5, 5, 6, 7, 8, 9, 134, 67, 128, 1234, 14, 1)) // Retorna o menor número
console.log("Math Random--", Math.random()) // Gera um número random de 0 a 1 sendo que ele nunca vai gerar o 1

const randomNumber = Math.round(Math.random() * (17 - 10) + 10) // Geração de número aleatório, aonde a gente tem que fazer 
// let fixed = Number(randomNumber.toFixed(2))
console.log("Número aleatório entre 17 e 10 ==", randomNumber)

console.log(Number(Math.PI.toFixed(2))) // Necessita de explicação?

console.log(num1 ** 0.5) // Realização da raiz quadrada de um número se quiser saber a raiz quadrada.

console.log(num1 / 0)
console.log(!!(num1 / 0))

console.log("-----------------------------------------------------------------------")
// TODO: Exercício

const writeNumber = 25

console.log(`A raiz quadrada do seu número é: `, writeNumber ** 0.5)
console.log(`Seu número é ${writeNumber}`)
console.log(`${writeNumber} é inteiro:`, Number.isInteger(writeNumber) )
console.log(`É NaN:`, Number.isNaN(writeNumber))
console.log(`Arredondando para baixo:`, Math.floor(writeNumber))
console.log(`Arredondando para cima:`, Math.ceil(writeNumber))
console.log(`Com duas casas decimais`, writeNumber.toFixed(2))