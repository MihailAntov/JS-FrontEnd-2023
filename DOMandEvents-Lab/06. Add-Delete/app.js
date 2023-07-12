function addItem() {
    let items = document.getElementById("items");
    let text = document.getElementById("newItemText").value;
    let newItem = document.createElement("li");
    newItem.textContent = text;
    let newAnchor = document.createElement("a");
    newAnchor.href = "#";
    newAnchor.textContent = "[Delete]";
    newAnchor.addEventListener("click",deleteHandler);
    newItem.appendChild(newAnchor);

    if (text) {
        items.appendChild(newItem);
    }

    function deleteHandler(e){
        e.currentTarget.parentElement.remove();
    }
}
