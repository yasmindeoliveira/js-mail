let email = ["matteo@gmail.com", "fabio@gmail.com", "pietro@gmail.com", "anna@gmail.com"];
let emailUtente = prompt("Inserisci la tua mail:");
let flag = false

for (i = 0; i < email.length; i++) {
    if (emailUtente == email[i]) {
        flag = true;
    }
};

if (flag) {
    console.log("La tua mail è valida");
} else {
    console.log("La tua mail non è valida");
    let permesso = prompt("Vuoi inserire la tua mail nella lista d'accesso? y (yes), n (no)");
    switch (permesso) {
        case "y":
            email.push(emailUtente);
            console.log("Benvenuto");
            console.log(email);
            break
        case "n":
            console.log("Ci dispiace, arrivederci");
            break
        default:
            console.log("Input non riconosciuto");
    };
};



let button = document.getElementById("button");
button.addEventListener('click', function () {
    let numero1 = Math.floor(Math.random() * (6 - 1)) + 1;
    let numero2 = Math.floor(Math.random() * (6 - 1)) + 1;

    console.log("Il valore del dado del computer è: " + numero1);
    console.log("Il valore del tuo dado è: " + numero2);

    if (numero1 > numero2) {
        console.log("Ha vinto il computer");
    } else if (numero1 < numero2) {
        console.log("HAI VINTO!");
    } else {
        console.log("Siete in pareggio");
    };
})