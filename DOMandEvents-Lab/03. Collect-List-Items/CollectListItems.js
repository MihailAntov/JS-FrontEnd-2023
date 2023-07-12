function extractText() {
    let list = [...document.getElementsByTagName("li")];
    let text = document.getElementById("result");
    text.textContent += list.map(e=> e.textContent).join("\n");
}