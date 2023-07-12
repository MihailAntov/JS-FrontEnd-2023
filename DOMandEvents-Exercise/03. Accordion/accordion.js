function toggle() {
    
    let extra = document.querySelector("#extra");
    if(extra.style.display !== "block"){
        extra.style.display = "block";
        document.querySelector(".button").textContent = "Less";
    }else{
        document.querySelector(".button").textContent = "More";
        extra.style.display = "none";
    }
}