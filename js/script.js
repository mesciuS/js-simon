

// Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 10 secondi.

let array = [];
let simoEl = document.getElementById("simone");

const timerUno = setTimeout(simoFN, 10000)
const timerDue = setTimeout(simoP, 10500)

let counter = 0;

while(array.length < 5) {
    let random = (Math.floor(Math.random() * (99 - 1)) + 1);
    if(!array.includes(random)) {
        array.push(random);
    }
    counter++;
}
simoEl.innerHTML = array;


// Dopo 10 secondi i numeri scompaiono e l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
function simoFN() {
    simoEl.innerText = "";
}



// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
function simoP() {
    let risposta = prompt("dimmi i numeri");
    if(array.includes(parseInt(risposta))) {
        console.log("yeee");
    } else {
        console.log("neeee");
    }
}

// Bonus:
// Gestire l'inserimento dei numeri tramite 5 input diversi.
