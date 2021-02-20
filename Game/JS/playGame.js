'use strict'

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}
let startNum = 1;
let endNum = 100;

let tries = Math.round(Math.log2(endNum-startNum+1));

let rnd = getRandomInt(endNum);

function startGame() {
    let input = document.getElementById('input-addon2').value;

    if (document.getElementById('button-addon2').innerText !== "Try")
    {
        document.getElementById('button-addon2').innerText = "Try";
    }
    if (isNaN(parseInt(input)) || parseInt(input) > 100 || parseInt(input) < 1) {
        document.getElementById('13').innerText = "Input data incorrect!!";
        tries += 1;
    } else {
        if (tries > 0) {
            if (input > rnd) {
                document.getElementById('13').innerText = `Your number is more than computer's. You have ${tries} tires`;
            } else if (input < rnd) {
                document.getElementById('13').innerText = `Your number is less than computer's. You have ${tries} tries`;
            } else {
                document.getElementById('13').innerText = "You win!!!";
                tries = 0;
                document.getElementById('button-addon2').innerText = "Restart";
                document.getElementById('button-addon2').onclick = restart;
                document.getElementById('input-addon2').disabled = true;
            }

        } else {
            document.getElementById('13').innerText = `You lose!!! Computer guessed ${rnd}`;
            document.getElementById('button-addon2').innerText = "Restart";
            document.getElementById('button-addon2').onclick = restart;
            document.getElementById("input-addon2").disabled = true;

        }

    }
}

    function restart() {
        rnd = getRandomInt(endNum);
        tries = Math.round(Math.log2(endNum - startNum + 1)) + 1;
        document.getElementById('button-addon2').onclick = startGame;
        document.getElementById('button-addon2').innerText = "Start";
        document.getElementById('13').innerText = "Input new number and let's start again!";
        document.getElementById("input-addon2").disabled = false;
        document.getElementById("input-addon2").focus();

}


    document.getElementById('button-addon2').onclick = startGame;
    document.getElementById("input-addon2").focus();
    document.addEventListener("keydown",function (event) {
        if (event.code === "Enter") {
            let event = new Event("click");
            document.getElementById('button-addon2').dispatchEvent(event);
            tries -= 1;
        }
    });



