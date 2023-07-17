const colors = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");


var setBg = () => {
    var randomColor = Math.floor(Math.random() * 16777215).toString(16);
    document.body.style.backgroundColor = "#" + randomColor;
    return "#" + randomColor;
}

btn.addEventListener("click", function () {
    let hexColor = "#";
    document.body.style.backgroundColor = setBg();
});

function getRandomNumber() {
    return Math.floor(Math.random() * hex.length);
}