// Set the Initial Count
let count = 0;

// Pointn the target elements

const value = document.getElementById("value");
const btn = document.querySelectorAll(".btn");

function increment() {
    count++;
    value.textContent = count
    checkNumber()
}

function decrement() {
    count--
    value.textContent = count
    checkNumber()
}

function reset() {
    count = 0
    value.textContent = 0
    checkNumber()
}

function checkNumber() {
    if (count > 0) {
        value.style.color = "green"
    } else if (count == 0) {
        value.style.color = "#222"
    } else if (count < 0) {
        value.style.color = "red"
    }
}


btn.forEach((button) => {
    if (button.classList.contains('decrease')) {
        button.addEventListener("click", decrement)
    } else if (button.classList.contains('increase')) {
        button.addEventListener("click", increment)
    } else {
        button.addEventListener("click", reset)
    }
})