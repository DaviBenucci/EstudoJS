// alert("LEON É MUITOOOOOOOOO TOP FILHO")

let vaA = "A" // B
let vaB = "B" // C
let vaC = "C" // A
const TempA = vaA

vaA = vaB
vaB = vaC
vaC = TempA

console.log(vaA, vaB, vaC)
// Ou é possível fazer assim de uma maneira mais avançada

let varA = "A";
let varB = "B";
let varC = "C";

[varA, varB, varC] = [varB, varC, varA]

console.log(varA, varB, varC)