let count = 0;
let timer;

function start() {
    timer = setInterval(function () {
        if (count <= 10) {
            document.getElementById("count").innerText = count;
            count++;
        }
        if (count > 10) {
            clearInterval(timer);
        }
    }, 1000);
}

function pause() {
    clearInterval(timer);
}

function stop() {
    clearInterval(timer);
    count = 0;
    document.getElementById("count").innerText = 0;
}
