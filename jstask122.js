function addTodo() {
    let text = document.getElementById("todoText").value;
    if (text == "") return;

    let li = document.createElement("li");
    li.innerHTML = text +
        ' <button onclick="editTodo(this)">Edit</button>' +
        ' <button onclick="deleteTodo(this)">Delete</button>';

    document.getElementById("todoList").appendChild(li);
    document.getElementById("todoText").value = "";
}

function deleteTodo(btn) {
    btn.parentElement.remove();
}

function editTodo(btn) {
    let newText = prompt("Edit Todo", btn.parentElement.firstChild.nodeValue);
    if (newText != null) {
        btn.parentElement.firstChild.nodeValue = newText;
    }
}
