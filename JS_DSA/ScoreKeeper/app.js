const button1 = document.querySelector("#button1");
const button2 = document.querySelector("#button2");
const reset = document.querySelector("#reset");
const input = document.querySelector("#number");
const p1 = document.querySelector("#p1");
const p2 = document.querySelector("#p2");
const tally = document.querySelector("#tally");
let score1 = 0;
let score2 = 0;
let max = 0;
let isGame = false;
let t1 = 0;
let t2 = 0;
button1.disabled = true;
button2.disabled = true;
reset.addEventListener("click", () => {
    tally.innerHTML = "0: Player1 and 0: Player2";
    res();
})
button1.addEventListener("click", () => {
    if (isGame === false) {
        score1++;
        p1.innerHTML = `${score1}`;
        if (score1 == max) {
            p1.style.color = "green";
            p2.style.color = "red";
            isGame = true;
            button1.disabled = true;
            button2.disabled = true;
            t1++;
            tally.innerHTML = `${t1}: Player1 and ${t2}: Player2 `
            if (t1 === 2) {
                tally.innerHTML = "<b>GAME OVER</b> Player 1 wins";
            }
        }

    }
})
button2.addEventListener("click", () => {
    if (isGame === false) {
        score2++;
        p2.innerHTML = `${score2}`;
        if (score2 == max) {
            p2.style.color = "green";
            p1.style.color = "red";
            isGame = true;
            button2.disabled = true;
            button1.disabled = true;
            t2++;
            tally.innerHTML = `${t1}: Player1 and ${t2}: Player2 `
            if (t2 === 2) {
                tally.innerHTML = "<b>GAME OVER</b> Player 2 wins";
            }
        }
    }
})
input.addEventListener("change", () => {
    max = input.value;
    res();
})
function res() {
    p1.innerHTML = "0";
    p2.innerHTML = "0";
    p1.style.color = "black";
    p2.style.color = "black";
    score1 = 0;
    score2 = 0;
    isGame = false;
    button1.disabled = false;
    button2.disabled = false;
};
