// Consegna:
// Scrivi un programma che stampi i numeri da 1 a 100.

// MILESTONE 2
// Per ogni numero, data una ul nel DOM, 
// aggiungete un elemento html li con il numero o la stringa corretta 
// (seguendo le regole della Milestone 1).

const list = document.getElementById('list');
let value;

for(let i = 1; i <= 1000; i++){
    if(i % 3 === 0 && i % 5 === 0){
        value = 'FizzBuzz';
    } else if (i % 5 === 0){
        value = 'Buzz';
    } else if (i % 3 === 0){
        value = 'Fizz';
    } else {
        value = i;
    }

    list.innerHTML += `<li>${value}</li>`;
}
