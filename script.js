let email = ["matteo@gmail.com", "fabio@gmail.com", "pietro@gmail.com", "anna@gmail.com"];
let emailUtente = prompt ("Inserisci la tua mail:");
let flag = false

for (i = 0; i < email.length; i++){
    if (emailUtente == email[i]){
        flag = true;
    }
};

if (flag){
    console.log("La tua mail è valida");
} else {
    console.log("La tua mail non è valida");
};