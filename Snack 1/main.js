/*
Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare a schermo la bici con peso minore utilizzando destructuring e template literal 
*/

const biciclette = [
    {
        'nome': 'bike-1',
        'peso': 6
    },
    {
        'nome': 'bike-2',
        'peso': 2
    },
    {
        'nome': 'bike-3',
        'peso': 4
    },
    {
        'nome': 'bike-4',
        'peso': 12
    },
    {
        'nome': 'bike-5',
        'peso': 14
    }
]

let biciletta_leggera = biciclette[0].peso;
let j = 0;

for (let i = 1; i < biciclette.length; i++) {
    const peso = biciclette[i].peso;
    // console.log(i, peso);
    if (biciletta_leggera > peso) {
        biciletta_leggera = peso;
        j = i;
        console.log('la bicicletta più leggera pesa ' + biciletta_leggera + 'kg');
    } 
}
console.log(biciclette[j]);

bicicletta_piu_leggera = biciclette[j];
console.log(bicicletta_piu_leggera);

const {nome, peso} = bicicletta_piu_leggera;
console.log(nome, peso);

document.getElementById('bicicletta').innerHTML = `La bici più leggera è ${nome} che pesa ${peso}kg`;