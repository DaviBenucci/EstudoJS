/* Strings são tipos de textos em JS, aonde quando algum texto ou número é colocado entre "", '' e `` eles são tratados
Como strings, que seriam textos */

const nome1 = "Davi"
const nome2 = 'Benucci'
const nome3 = `Davi`
// Contudo dentro da crase se é possível colocar o valor de variáveis utilizando ${}

const nome4 = `Davi ${nome2}`

console.log(nome1)
console.log(nome2)
console.log(nome3)
console.log(nome4)
console.log("-------------------------------------")

/* As strings são indexaveis isso quer dizer que elas são iteráveis*/

//          0123456789
let text = "Wheaver th"

//Maneiras de concatenar 
console.log(text.concat("ing ", "is on the table"))
console.log(text + "ing", "is on the table")
console.log(`${text}ing is on the table`)

console.log("--------------------------------------")

console.log (text[9])
console.log(text.indexOf("e", 0)) // O indexOf começa a procurar o indice a partir do ínicio (esquerda para a direita) 
console.log(text.indexOf("i", 3))
console.log(text.lastIndexOf("i", 2)) // já o lastindexOF começa a procurar o indice a partir do final (da direita para a esquerda)
console.log(text.lastIndexOf("e", 9))

//Expressão regular 

