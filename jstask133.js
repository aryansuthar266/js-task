function submitData() {
    let name = document.getElementById("name").value;
    let mobile = document.getElementById("mobile").value;
    let city = document.getElementById("city").value;

    if (name == "" || mobile == "" || city == "") {
        alert("Please fill all required fields");
        return;
    }

    let gender = document.querySelector('input[name="gender"]:checked');
    gender = gender ? gender.value : "";

    let hobbies = [];
    document.querySelectorAll('input[type="checkbox"]:checked')
        .forEach(h => hobbies.push(h.value));

    document.getElementById("output").innerHTML =
        "Name: " + name + "<br>" +
        "Mobile: " + mobile + "<br>" +
        "Gender: " + gender + "<br>" +
        "Hobby: " + hobbies.join(", ") + "<br>" +
        "City: " + city;
}
