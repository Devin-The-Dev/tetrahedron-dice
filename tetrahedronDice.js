const dice = [0, 0, 0, 1];
function diceRoll() {
    const randomNumber = Math.floor(Math.random() * 4);
    return dice[randomNumber];
};
function myFunction() {
    document.getElementById("demo").innerHTML = "" + diceRoll() + "";
}