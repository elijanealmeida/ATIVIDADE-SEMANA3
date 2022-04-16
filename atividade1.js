//Elabore um algoritmo que receba um número (1-7)
// e devolva o dia da semana correspondente.

function verificaDiaDaSemana(diaDaSemana){
switch(diaDaSemana) {
    case 'dia1':
        return 'domingo'
    case 'dia2':
        return 'segunda' 
    case 'dia3':
        return 'terça'
    case 'dia4':
        return 'quarta' 
    case 'dia5':
        return 'quinta'  
    case 'dia6':
        return 'sexta'   
    case'dia7':
        return 'sabado'        
    default:
        return 'Dia inexistente'
    }    
}


console.log(verificaDiaDaSemana('dia2'))
