/*
Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà:
Punti fatti e falli subiti.
Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.
*/

const squadre = [
    {
        'nome': 'squadra-1',
        'punti': 0,
        'falli': 0
    },
    {
        'nome': 'squadra-2',
        'punti': 0,
        'falli': 0
    },
    {
        'nome': 'squadra-3',
        'punti': 0,
        'falli': 0
    },
    {
        'nome': 'squadra-4',
        'punti': 0,
        'falli': 0
    },
    {
        'nome': 'squadra-5',
        'punti': 0,
        'falli': 0
    }
]
// console.log(squadre[0].punti);
console.log(squadre);
let squadre2 = [];

for (let i = 0; i < squadre.length; i++) {

    punti_random = numero_random(1, 20);
    squadre[i].punti = punti_random;
    
    falli_random = numero_random(1, 8);
    squadre[i].falli = falli_random; 

    let {nome, falli} = squadre[i];
    squadre2.push({nome, falli});
}

console.log(squadre2);




// funzione numero random
function numero_random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}