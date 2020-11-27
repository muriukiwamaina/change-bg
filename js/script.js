const button = document.getElementById('clickme');
const colors = ["red", "green", "blue", "grey", "black"];

button.addEventListener('click', changeBackground);
function changeBackground() {
    const colorIndex = parseInt(Math.random()*colors.length);
    document.body.style.backgroundColor = colors[colorIndex];
}