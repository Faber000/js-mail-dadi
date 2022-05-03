const button = document.getElementById("button");
button.addEventListener('click',
    function() {

        playerNumber = Math.floor(Math.random() * 7);
        computerNumber = Math.floor(Math.random() * 7);


        const containerText = document.querySelector(".containerText");
        const playerText = document.createElement("h2");
        const computerText = document.createElement("h2");
        containerText.innerText="";
        playerText.innerText = "Hai avuto "+playerNumber;
        computerText.innerText = "Il computer ha avuto "+computerNumber;
        containerText.append(playerText);
        containerText.append(computerText);

        const winner = document.createElement("h2");

        if(playerNumber>computerNumber) {
            winner.innerText = "Hai vinto!";
        }
        else if (playerNumber<computerNumber) {
            winner.innerText = "Ha vinto il computer :(";
        } else {
            winner.innerText = "Parità!";
        }
        containerText.append(winner);
    }
)