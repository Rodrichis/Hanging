let words =[
'ANIMAL',
'PERRO',
'PROGRAMA',
'CELULAR',
'TELEFONO',
];



export function getRandomWord(){
    const ramdonIndex = Math.floor(Math.random()*words.length) ;


    return words[ramdonIndex];
}