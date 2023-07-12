function focused() {

    let elements = Array.from(document.querySelectorAll("div div input"));
    elements.forEach(e=> {
        e.addEventListener("focus",focusHandler);
        e.addEventListener("blur",blurHandler);
        
    });


    console.log(elements);
    function focusHandler(e){
        e.currentTarget.parentElement.classList.add("focused");
        
    }

    function blurHandler(e){
        e.target.parentElement.classList.remove("focused");
    }
}