function addItem() {
    let text = document.querySelector("#newItemText");
    let value = document.querySelector("#newItemValue");

    if(text.value && value.value){
        let options = document.querySelector("#menu");
        let newOption = document.createElement("option");
        newOption.value = value.value;
        newOption.textContent = text.value;
        options.appendChild(newOption);
        text.value = "";
        value.value = "";
    }
}