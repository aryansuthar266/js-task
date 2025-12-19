let time = 30;
let timer;

function startTimer() {
    clearInterval(timer);
    time = 30;
    document.getElementById("resend").style.display = "none";

    timer = setInterval(function () {
        let sec = time < 10 ? "0" + time : time;
        document.getElementById("timer").innerText = "00:" + sec;

        time--;

        if (time < 0) {
            clearInterval(timer);
            document.getElementById("timer").innerText = "00:00";
            document.getElementById("resend").style.display = "inline";
        }
    }, 1000);
}
