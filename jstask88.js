let randomNumber = Math.floor(Math.random() * 10) + 1;

function checkNumber() {
    let userValue = document.getElementById("userNumber").value;

    if (userValue == randomNumber) {
        document.getElementById("result").innerText =
            "Success Value : Number Matched 🎉";
    } else {
        document.getElementById("result").innerText =
            "Failure Value : Try Again ❌";
    }
}
