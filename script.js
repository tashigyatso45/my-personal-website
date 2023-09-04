const h2 = document.createElement("h2");
h2.textContent = "This content added by JavaScript";
document.querySelector("body").appendChild(h2)
const myButton = document.querySelector(".horizontal-list");
myButton.addEventListener('click', function () {
    alert("don't touch me");
});