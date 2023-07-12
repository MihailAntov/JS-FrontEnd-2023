function lockedProfile() {
    let profiles = Array.from(document.querySelectorAll(".profile"));
    console.log(profiles);
    profiles.forEach(p=>{
        let button = p.querySelector("button");
        
        button.addEventListener("click",clickHander);
    });

    function clickHander(e){
        let parent = e.target.parentElement;
        let radio = Array.from(parent.querySelectorAll("input[type=radio]"))
        .filter(r=> r.checked)[0]
        .value;

        if(radio !== "lock"){
            let hidden = e.target.parentElement.querySelector("div");
            let show = e.target.parentElement.querySelector("button");
            if(!hidden.style.display || hidden.style.display === "none"){
                show.textContent = "Hide it";
                hidden.style.display = "inline";
            }else{
                hidden.style.display = "none";
                show.textContent = "Show more";
            }
        }
    }
}