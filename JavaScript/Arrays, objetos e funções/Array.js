// Arrays é uma forma de listar diversas informações em uma única variável
// Os Arrays assim como as strings são indexáveis, contudo eles não são com as strings.
// Eles são indexáveis por elementos, com cada elemento tendo um índice.
//Aonde em um Array podemos adicionar, strings, objetos, numbers, funções, etc..

//            012345678910
const name = "Davi Israel"

//              0       1       2        3
let alunos = ["Davi", "Luiz", "Maria", "Fernanda"]
//? console.log(alunos.length) // Saber a quantidade de elementos que há no Array

//? console.log(alunos)
//? console.log(alunos[0])
//? console.log(alunos[2])

//? alunos[3] = "Mudei" // Muda o valor do Array
//?  alunos[4] = "Pedro" // Adiciona um elemento ao final do Array
//? console.log(alunos)

//? alunos[alunos.length] = "Pedro" // Adiciona um elemento ao final do Aarray
//? alunos[alunos.length] = "João"
//? alunos[alunos.length] = "Bia"
//? console.log(alunos)

//? alunos.push("Pedro") // Adiciona um elemento ao final do Array
//? alunos.push("EU")
//? alunos.push("More More Jump!!!!")
//? console.log(alunos)

//? alunos.unshift("Alguém") // adiciona no começo do array
//? alunos.unshift("Alguém2") // 

//? console.log(alunos[0])
 
//? const remove = alunos.pop(); // Remover o último elemento do array
//? console.log(remove) //retorna o elemento removido 
//? console.log(alunos)

 const remove1 = alunos.shift() // Remover o primeiro elemento de um array
 console.log(remove1)
 console.log(alunos)

 const add = alunos.unshift("Algo") // adiciona o elemento no começo do array
 console.log(add) // Se consultado informa a quantidade de indices que há no array
 console.log(alunos)

// Dessa forma que fizemos agora, além de deletar um elemento do array, nós modificamos o indice do array

//? delete alunos[1] // Contudo dessa forma, ao deletarmos um item do array, esse item deletado fica como (Item vazio), pois aqui não foi modificado o indice do array
//? console.log(alunos)
//? console.log(alunos[1])

// alunos.push("Pedro")
// alunos.push("Henry")

// console.log(alunos.slice(0, 3)) // Podemos também recortar os elementos de um array, retornando somente determinados elementos.
// // Assim como utilizamos com strings, funcionando da mesma forma, mas com os indices do array.

//? alunos = 123
//? console.log(typeof alunos)
//? console.log(alunos instanceof Array) // essa variável é uma instância de Array? Se retornar true é um array, pois o typeof indique que o array é um objeto indexado
