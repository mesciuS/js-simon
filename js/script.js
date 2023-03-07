


let array = [];
let arrayR = [];
let simoEl = document.getElementById("simone");

const timerUno = setTimeout(simoFN, 3000)
const timerDue = setTimeout(simoP, 3500)


// Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 10 secondi.
let counter = 0;
while(array.length < 5) {
    let random = (Math.floor(Math.random() * (8 - 1)) + 1);
    if(!array.includes(random)) {
        array.push(random);
    }
    counter++;
}
simoEl.innerHTML = array;
console.log(array)

// Dopo 10 secondi i numeri scompaiono e l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
function simoFN() {
    simoEl.innerText = "";
}



// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
function simoP() {

    arrayR.push(parseInt(prompt("dammi il primo numero")));
    arrayR.push(parseInt(prompt("dammi il secondo numero")));
    arrayR.push(parseInt(prompt("dammi il terzo numero")));
    arrayR.push(parseInt(prompt("dammi il quarto numero")));
    arrayR.push(parseInt(prompt("dammi il quinto numero")));

    console.log(arrayR)

    if(equalsCheck(array, arrayR)) {

        simoEl.innerText = "yes";

    } else {
        
        simoEl.innerText = "no";

    }
        
}

const equalsCheck = (array, arrayR) =>
    array.length === arrayR.length &&
    array.every((v, i) => v === arrayR[i]);


// Bonus:
// Gestire l'inserimento dei numeri tramite 5 input diversi.
