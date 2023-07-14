function encodeAndDecodeMessages() {
    const buttons = [...document.querySelectorAll("button")];
    const textAreas = [...document.querySelectorAll("textArea")];
    let encode = buttons[0];
    let decode = buttons[1];
    encode.addEventListener("click",encodeHandler);
    decode.addEventListener("click",decodeHandler);



    function encodeHandler(e){
        const input = textAreas[0].value;
        let encodedMsg = "";
        for (const symbol of input) {
            encodedMsg+= String.fromCharCode(symbol.charCodeAt(0) + 1);
        }
        textAreas[0].value = "";
        textAreas[1].value = encodedMsg;
        
    }

    function decodeHandler(e){
        const input = textAreas[1].value;
        let decodedMsg = "";
        for (const symbol of input) {
            decodedMsg += String.fromCharCode(symbol.charCodeAt(0) - 1);
        }
        textAreas[1].value = decodedMsg;
        
    }


}