let email = ["matteo@gmail.com", "fabio@gmail.com", "pietro@gmail.com", "anna@gmail.com"];
let emailUtente
let flag = false

let buttonBlock = document.getElementById("button-block");
buttonBlock.addEventListener('click', function () {
    emailUtente = document.getElementById("email").value;
    for (i = 0; i < email.length; i++) {
        if (emailUtente == email[i]) {
            flag = true;
        }
    };

    if (flag) {
        console.log("La tua mail è valida");
        document.getElementById("div-botone").innerHTML = '<button type="button" class="btn btn-danger" id="button">Clicca per giocare</button>'

        let button = document.getElementById("button");
        button.addEventListener('click', function () {
            let numero1 = Math.floor(Math.random() * (6 - 1 + 1)) + 1;
            let numero2 = Math.floor(Math.random() * (6 - 1 + 1)) + 1;

            console.log("Il valore del dado del computer è: " + numero1);
            console.log("Il valore del tuo dado è: " + numero2);

            if (numero1 > numero2) {
                console.log("Ha vinto il computer");

                document.getElementById("computer").innerHTML = "Il valore del dado del computer è: " + numero1;
                document.getElementById("utente").innerHTML = "Il valore del tuo dado è: " + numero2;
                document.getElementById("esito").innerHTML = "Ha vinto il computer... (っ °Д °;)っ";

            } else if (numero1 < numero2) {
                console.log("HAI VINTO!");

                document.getElementById("computer").innerHTML = "Il valore del dado del computer è: " + numero1;
                document.getElementById("utente").innerHTML = "Il valore del tuo dado è: " + numero2;
                document.getElementById("esito").innerHTML = "VITTORIA! \(￣︶￣*\))";

            } else {
                console.log("Avete pareggiato");

                document.getElementById("computer").innerHTML = "Il valore del dado del computer è: " + numero1;
                document.getElementById("utente").innerHTML = "Il valore del tuo dado è: " + numero2;
                document.getElementById("esito").innerHTML = "Questo è un pareggio (* ￣︿￣)";

            };
        })

    } else {
        console.log("La tua mail non è valida");
        let permesso = prompt("Vuoi inserire la tua mail nella lista d'accesso? y (yes), n (no)");
        switch (permesso) {
            case "y":
                email.push(emailUtente);
                console.log("Benvenuto");
                console.log(email);
                document.getElementById("div-botone").innerHTML = '<button type="button" class="btn btn-danger" id="button">Clicca per giocare</button>'

                let button = document.getElementById("button");
                button.addEventListener('click', function () {
                    let numero1 = Math.floor(Math.random() * (6 - 1)) + 1;
                    let numero2 = Math.floor(Math.random() * (6 - 1)) + 1;

                    console.log("Il valore del dado del computer è: " + numero1);
                    console.log("Il valore del tuo dado è: " + numero2);

                    if (numero1 > numero2) {
                        console.log("Ha vinto il computer");

                        document.getElementById("computer").innerHTML = "Il valore del dado del computer è: " + numero1;
                        document.getElementById("utente").innerHTML = "Il valore del tuo dado è: " + numero2;
                        document.getElementById("esito").innerHTML = "Ha vinto il computer... (っ °Д °;)っ";

                    } else if (numero1 < numero2) {
                        console.log("HAI VINTO!");

                        document.getElementById("computer").innerHTML = "Il valore del dado del computer è: " + numero1;
                        document.getElementById("utente").innerHTML = "Il valore del tuo dado è: " + numero2;
                        document.getElementById("esito").innerHTML = "VITTORIA! \(￣︶￣*\))";

                    } else {
                        console.log("Avete pareggiato");

                        document.getElementById("computer").innerHTML = "Il valore del dado del computer è: " + numero1;
                        document.getElementById("utente").innerHTML = "Il valore del tuo dado è: " + numero2;
                        document.getElementById("esito").innerHTML = "Questo è un pareggio (* ￣︿￣)";

                    };
                })

                break
            case "n":
                console.log("Ci dispiace, arrivederci");
                break
            default:
                console.log("Input non riconosciuto");
        };
    };
})


