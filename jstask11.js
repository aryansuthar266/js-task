let value = 0;

function increment() {
    if (value < 10) {
        value = value + 1;
        document.getElementById("count").innerText = value;
    }
}

function decrement() {
    if (value > 0) {
        value = value - 1;
        document.getElementById("count").innerText = value;
    }
}
