/* TypeOf é utilizado quando queremos saber o tipo de alguma informação */

const number = "14"
const name = "Davi"
const age = 18

console.log(typeof name)
console.log(typeof age)
console.log(typeof (age + number))

const nome = "Davi Israel"
const sobreNome = "Benucci"
let idade = 19
let peso = 70
let alturaEmM = 1.8
let IMC = peso / (alturaEmM * alturaEmM)
let anoNascimento = 2026 - idade

console.log (`${nome} ${sobreNome} tem ${idade} anos, pesa ${peso}Kg tem ${alturaEmM}m e seu IMC é de ${IMC} E ele nasceu no ano de ${anoNascimento}`)