//Elabore um algoritmo que receba dois números
//e determine qual é o maior entre eles, se os numeros forem iguais.
//mostre uma mensagem no console "Os números são iguais".


function comparaOsNumeros(n1, n2) {
    if (n1 > n2) {
       console.log(`O ${n1} é maior`)
    } else
    if (n1 < n2) {
        console.log(`O ${n2} é maior`)
    } else 
    if (n1 = n2) {
        console.log("Os números são iguais")
    }       
    
}

console.log(comparaOsNumeros(8, 4)) // o oito é maior

console.log(comparaOsNumeros(5, 5)) // são iguais