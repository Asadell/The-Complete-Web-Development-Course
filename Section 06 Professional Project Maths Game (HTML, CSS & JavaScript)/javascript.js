let playing = false;
let score;
let timeremaining;
let action;
let correctanswer;


// if we click on the start/reset
document.getElementById("startreset").onclick = function () {
    // if we are playing
    if (playing) {

        // reload page
        location.reload();

    } else {// if we are not playing
        // menghilangkan panel game over
        hide("gameover");

        // change mode to playing
        playing = true;

        // set score to 0
        score = 0;
        document.getElementById("scoreValue").innerHTML = score;

        // show countdown box
        document.getElementById("timeremaining").style.display = "block";
        timeremaining = 60;
        document.getElementById("timeremainingvalue").innerHTML = timeremaining;


        // reduce time by 1sec in loops
        startCountdown();
        // time left?
        // yes -> continue
        // no -> gameover

        //change button to reset
        document.getElementById("startreset").innerHTML = "Reset Game";

        // generate new QnA
        generateQA();
    }

}

// if we click on answer box
// if we are playing
// correct?
// yes
// increase score
// show correct box for 1sec
// generate new QnA
// no
// show try again box for 1sec




// if we click on the start/reset
// if we are playing
// reload page
// if we are not playing
// set score to 0
// shjow countdown box
// reduce time by 1sec in loops
// time left?
// yes -> continue
// no -> gameover
//change button to reset
// generate new QnA

// if we click on answer box
// if we are playing
// correct?
// yes
// increase score
// show correct box for 1sec
// generate new QnA
// no
// show try again box for 1sec

// function

for (let index = 1; index < 5; index++) {
    document.getElementById("box" + index).onclick = function () {

        if (playing) { // mode playing?

            if (this.innerHTML == correctanswer) { // jawaban user benar
                score++;
                document.getElementById("scoreValue").innerHTML = score;

                hide("wrong");
                show("correct");
                setTimeout(function () {
                    hide("correct");
                }, 1000);

                generateQA();
            } else { // jawaban user salah
                hide("correct");
                show("wrong");
                setTimeout(function () {
                    hide("wrong");
                }, 1000);
            }

        }
    }
}


function startCountdown() {
    action = setInterval(() => { // kurang tulisan function nyaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        timeremaining--;
        document.getElementById("timeremainingvalue").innerHTML = timeremaining;

        // if timeremaining finished
        if (timeremaining == 0) { // gameover
            stopCountDown();

            hide("correct");
            hide("wrong");
            hide("timeremaining");

            document.getElementById("gameovervalue").innerHTML = score;

            show("gameover");

            document.getElementById("startreset").innerHTML = "Start Game";

            // change mode to finish
            playing = false;
        }

    }, 1000);
}

function stopCountDown() {
    clearInterval(action);
}

function show(id) {
    document.getElementById(id).style.display = "block";
}
function hide(id) {
    document.getElementById(id).style.display = "none";
}

function generateQA() {
    let x = 1 + Math.round(Math.random() * 9);
    let y = 1 + Math.round(Math.random() * 9);
    correctanswer = x * y;

    document.getElementById("question").innerHTML = x + "x" + y;

    let correctposition = 1 + Math.round(Math.random() * 3);
    document.getElementById("box" + correctposition).innerHTML = correctanswer;

    let array = [correctanswer];

    for (let index = 1; index < 5; index++) {
        if (index != correctposition) {
            let wronganswer;
            do {
                wronganswer = 1 + Math.round(Math.random() * 9) * 1 + Math.round(Math.random() * 9);
            } while (array.indexOf(wronganswer) > -1);
            document.getElementById("box" + index).innerHTML = wronganswer;
            array.push(wronganswer);
        }
    }
}