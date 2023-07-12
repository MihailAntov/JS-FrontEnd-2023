function addItem() {
    let items = document.getElementById("items");
    let text = document.getElementById("newItemText").value;
    let newItem = document.createElement("li");
    newItem.textContent = text;
    
    if(text){
        items.appendChild(newItem);
    }
}