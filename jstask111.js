function calculateGST() {
    let amount = Number(document.getElementById("amount").value);
    let rate = Number(document.getElementById("gst").value);

    let gstAmount = (amount * rate) / 100;
    let total = amount + gstAmount;

    document.getElementById("result").innerHTML =
        "Amount: ₹ " + amount.toFixed(2) + "<br>" +
        "GST (" + rate + "%): ₹ " + gstAmount.toFixed(2) + "<br>" +
        "Total: ₹ " + total.toFixed(2);
}
