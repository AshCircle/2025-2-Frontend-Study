const number = document.getElementById("counting-num");
const increaseButton = document.getElementById("increase");
const decreaseButton = document.getElementById("decrease");
const increaseDecaButton = document.getElementById("increaseDeca");
const decreaseDecaButton = document.getElementById("decreaseDeca");
const resetButton = document.getElementById("reset");

let count = 0;
number.textContent = count;

function increaseCount(amount) {
    count += amount;
    number.textContent = count;
}

function decreaseCount(amount) {
    count -= amount;
    number.textContent = count;
}

function resetCount() {
    count = 0;
    number.textContent = count;
}

increaseButton.addEventListener("click", () => increaseCount(1));
decreaseButton.addEventListener("click", () => decreaseCount(1));
increaseDecaButton.addEventListener("click", () => increaseCount(10));
decreaseDecaButton.addEventListener("click", () => decreaseCount(10));
resetButton.addEventListener("click", resetCount);
