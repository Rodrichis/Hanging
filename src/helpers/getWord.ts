let words =[
'ANIMAL',
'PERRO',
'PROGRAMA',
'CELULAR',
'AUTO',
'MANZANA',
'GATO',
'VIDEO',
'MONO',
'PLATANO',
'REACT',
];



export function getRandomWord(){
    const ramdonIndex = Math.floor(Math.random()*words.length) ;


    return words[ramdonIndex];
}