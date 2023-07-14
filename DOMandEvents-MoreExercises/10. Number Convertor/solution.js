function solve() {

    const selectTo = document.querySelector("#selectMenuTo");
    selectTo.children[0].value = "binary";
    selectTo.children[0].textContent = "Binary";
    
    let hexa = document.createElement("option");
    hexa.value = "hexadecimal";
    hexa.textContent = "Hexadecimal";

    selectTo.appendChild(hexa);

    const input = document.querySelector("#input");
    const result = document.querySelector("#result");
    const button = document.querySelector("button");
    
    button.addEventListener("click",clickHandler);

    function clickHandler(e){
        let numberAsDecimal = Number(input.value);
        let mode = selectTo.value;
        let resultValue;
        if(mode === "hexadecimal"){
            resultValue = numberAsDecimal.toString(16).toUpperCase();
            
        }else if(mode === "binary"){
            resultValue = numberAsDecimal.toString(2);
        }

        result.value = resultValue;
    }
}