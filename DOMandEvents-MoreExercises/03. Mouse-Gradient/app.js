function attachGradientEvents() {
    let gradient = document.getElementById("gradient");
    let result = document.getElementById("result");
    gradient.addEventListener("mousemove", eventHandler);

    function eventHandler(e){
        result.textContent = Math.trunc(e.offsetX/ 3) + "%";
    }
}