//Crie uma função que receba 2 parâmetros 
//e retorna o resultado da divisão entre eles.
//Diga se esse número é par ou ímpar.

function divisao(num1, num2){
    const resultado = num1 / num2
    if (resultado % 2 == 0){
        return `O resultado é ${resultado.toFixed(2)} este número é par`
    
    } else {
        return `O resultado é ${resultado.toFixed(2)} este número é ímpar`
    }

}

console.log(divisao(25, 80))

