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
let text = "Wheaver thing"

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

//Expressões regulares

console.log(text.match(/[a-z]/)) //Ele identifica todas as letras minusculas de a-z na string
console.log(text.match(/[a-z]/g)) //Ele identifica todas as letras minusculas de a-z na string
console.log(text.search(/a/g)) // Esse pesquisa em qual indice está essa letra 
console.log(text.replace(/Wheaver/, "What"))
console.log(text.replace(/e/g, "i")) //Se tiver o (g) ele identifica todos as letras informadas que tem na string e substitui 

console.log(text.length) // Utilizado para vermos quantos caracteres temos na palavra.
console.log(text.slice(0, 6)) // Lembrando que ele não pega o último valor que está no último índice. Aonde o primeiro seria o start e o segundo seria o final

//Quando você utiliza isso com números negativos, é como se ele estivesse pegando a string inteira e subtraindo o número que você informou.
console.log(text.length - 2)
console.log(text.slice(-5, -1))

console.log(text.split(' ')) //Ele fatia o que for colocado dentro dele em um array.

console.log(text.toUpperCase()) //toUpperCase transforma todas as letras em maiúsculas
console.log(text.toLowerCase()) //toLowerCase transforma todas as letras em minúsculas. 


// TODO: Exercício ------------------------------------------------------------------------------


const nome = "Davi Israel Benucci"
 console.log( `Seu nome é completo é ${nome} `)
 console.log( `Seu tem nome tem ${nome.length} letras`)
 console.log( `A segunda letra do seu nome é: ${nome[1]}`)
 console.log( `O primeiro indice da letra a no seu nome? ${nome.indexOf("a")} `)
 console.log( `O último indice da letra a no seu nome? ${nome.lastIndexOf("a")} `)
 console.log( `As últimas 3 letras do seu nome são: ${nome.slice("-3")}`)
 console.log( `As palavras do seu nome são ${nome.split(" ")}`)
 console.log( `Seu nome com letras maiúsculas: ${nome.toUpperCase()} `)
 console.log( `Seu nome com letras minúsculas: ${nome.toLowerCase()} `)