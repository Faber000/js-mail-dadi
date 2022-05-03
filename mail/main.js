const emails = ["banana.33@gmail.com", "fabio.moro2000@gmail.com", "fragola86@gmail.com"];

const userMail = prompt("inserisci la tua mail");

let found = false;

for (let i=0; i < emails.length; i++) {

    if(userMail == emails[i]) {
        found = true;
    }
}

const container = document.querySelector(".container");
const message = document.createElement("h2");

if (found) {
    
    message.innerText ="Accesso consentito";
}
else {

    message.innerText ="Accesso negato, la tua mail non è presente nell'elenco";
}
container.append(message);
