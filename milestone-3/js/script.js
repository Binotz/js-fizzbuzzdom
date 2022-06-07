// Consegna:
// Scrivi un programma che stampi i numeri da 1 a 100.

// MILESTONE 3
// Per ogni numero, dato un container nel DOM, appendi un elemento html con il numero o la stringa corretta.
// Applica uno stile differente a seconda del valore dell'indice 
// per i multipli di 3, per i multipli di 5 e per i valori che sono sia multipli di 3 che di 5 
// (seguendo le regole della Milestone 1).

const boxContainer = document.querySelector('.number-box-container');
let value;
let boxStyle;

for(let i = 1; i <= 1000; i++){
    if(i % 3 === 0 && i % 5 === 0){
        value = 'fizzbuzz';
        boxStyle = 'fizzbuzz';
    } else if (i % 5 === 0){
        value = 'buzz';
        boxStyle = 'buzz';
    } else if (i % 3 === 0){
        value = 'fizz';
        boxStyle = 'fizz';
    } else {
        value = i;
        boxStyle = '';
    }

    boxContainer.innerHTML += `<div class="number-box ${boxStyle}">${value}</div>`;
}
