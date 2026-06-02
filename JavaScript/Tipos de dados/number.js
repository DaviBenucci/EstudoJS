//* IEEE 754-2008

//* São os tipos declarados como número sendo númericos, aonde mesmo que o número tenha valores decimais,
//* na tipagem ele continua sendo number. Sem ter específicação de int opu float 

console.log("-----------------------------------------------------------------------------")
const number = 25
const number2 = 25
const number3 = 25.25

//? contudo se um número for colocado entre "", '' ou `` ele será tratado como uma string

const number4 = "25"

console.log (typeof number, typeof number2, typeof number3, typeof number4)

console.log("-----------------------------------------------------------------------------")
let num1 = 10.15248635
let num2 = 2.5

//? console.log(num1.toString() + num2) // Aqui a variável não foi modificada no resto do código, ela fopi modificada somente nesse espaço de código. 
//? console.log(typeof(num1))

//? num1 = num1.toString() //Dessa forma sim, mudamos o tipo dessa variável e agora ela passa a ser uma string
//? console.log(typeof(num1))

//? console.log(num1.toString(2)) // Utilizamos isso para vermos a representação binária do número

//? console.log(num1.toFixed(2)) //E esse é para que ele faça o arredondamento/fixar a quantidade de casa decimais que ele vai mostrar

//? console.log(Number.isInteger(num1)) // Para realizar a verificação e ver se o número é inteiro, Aonde ele retornará true ou false.

//? let temp = num1 * "Hello"

//? console.log(Number.isNaN(temp)) //Este retorna true se a conta for um NaN no caso se a conta for inválida

num1 = 0.7
num2 = 0.1

num1 += num2
num1 += num2
num1 += num2

//? num1 = Number(num1.toFixed(2)) // Dessa forma corrigimos a imprecisão antes que o problema aconteça

//? num1 = parseFloat(num1.toFixed(2)) Utilizaríamos essa função do próprio JS para que seja corrigida a imprecisão do sistema IEEE 754-2008

//? num1 = ((num1 * 100) + (num2 * 100)) / 100 // Mais uma maneira para que seja resolvido o problema da imprecisão do IEEE 754-2008, matemáticamente falando

console.log(num1)
console.log(Number.isInteger(num1))