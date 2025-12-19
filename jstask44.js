function showTime() {
    let now = new Date();

    let date = now.toDateString();
    let time = now.toLocaleTimeString();

    document.getElementById("clock").innerText =
        date + " " + time;
}

setInterval(showTime, 1000);
