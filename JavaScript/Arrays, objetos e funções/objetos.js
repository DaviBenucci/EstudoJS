//TODO: Objetos em JavaScript

//? Objeto literal
 const pessoa01 = {
    nome: "Davi",
    sobrenome: "Benucci",
    idade: 18,

/* Nos objetos se é possível adicionar funções, aonde podemos utilizar o this dentro da função para referenciar a 
"Esse" objeto ao qual Se está incluído a função*/

    fala() {
      console.log(`${this.nome} ${this.sobrenome} está falando que tem ${this.idade} anos de idade`)
    },

    passouAno() {
      this.idade++
    }
 }

pessoa01.fala()
pessoa01.passouAno()
pessoa01.fala()

 // Isso é uma função Feature que é basicamente uma função que cria objetos, uma fábrica de criar objetos
 function createUser(nome, sobrenome, idade) {
    return {
        nome, sobrenome, idade
    }
 }
/* Podemos também colocar parâmetros dentro de uma função e fazer com que ela retorne um objeto,
aonde o JS pode já referenciar esse objeto pelos parâmetros se ambos forem iguais. e após isso
por meio de uma única varíavel podemos chamar essa função sempre e criar novos objetos.

 Por isso o nome de função FEATURE pois ela é uma fábrica de criação de objetos.*/

 const user1 = createUser("Davi", "Benucci", 18)
 const user2 = createUser("Pedro", "Bertoni", 14)
 const user3 = createUser("Jonathan", "Jesus", 18)
 console.log(`${user1.nome}, ${user2.nome}, ${user3.nome}`)