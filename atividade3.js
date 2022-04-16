//Crie um algoritmo que receba três notas de um aluno,
//calcule sua media e mostre sa seguintes mensagens de acordo com cada situação:

//Se a media for igual ou maior que 7 - Aprovado
//Se a media for maior e igual a cinco e menor que 7 - Recuperação
//Se a media for menor que cinco - Reprovado



function resultadoDoAluno(nota1, nota2, nota3){
  const media = (nota1 + nota2 + nota3)/3
  if (media >= 7 && media <= 10) {
    return `Você está aprovado ${media}` 
  } else if (media <= 7 && media >= 5) {
    return `Você está de recuperação ${media}`  
  } else if (media < 5 && media >= 0)
    return `Você está reprovado ${media}`
}

console.log(resultadoDoAluno(8, 6, 4))
