function changeColor() {
    let r = document.getElementById("r").value;
    let g = document.getElementById("g").value;
    let b = document.getElementById("b").value;

    let color = "rgb(" + r + "," + g + "," + b + ")";

    document.body.style.backgroundColor = color;
    document.getElementById("rgbValue").innerText = color;
}

