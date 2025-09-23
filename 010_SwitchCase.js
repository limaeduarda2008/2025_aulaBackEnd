let diaSemana = 'sexta';

switch (diaSemana) {
    case 'segunda' : //if (diaSemana == 'seguda')
        console.log('Hoje tem SENAI');
        break;
    case 'terça' : //if (diaSemana == 'terça')
        console.log('Hoje tem SENAI');   // else if
        break;
    case 'quarta' : 
    case 'quinta' : 
    case 'sexta' : 
        console.log('Hoje não tem SENAI');
        break;
    default: // else
        console.log('Hoje não tem aula');
        break;
}