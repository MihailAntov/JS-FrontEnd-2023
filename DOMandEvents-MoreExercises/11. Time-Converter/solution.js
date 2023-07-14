function attachEventsListeners() {

    const buttons = [...document.querySelectorAll("div > input[type=button]")];
    buttons.forEach(b=> {
        b.addEventListener("click",clickHandler);
    })


    function clickHandler(e){
        let source = e.target;
        let seconds;
        console.log(e.target);
        if(source.id === "daysBtn"){
            let days = source.parentElement.querySelector("input").value;
            seconds = Number(days) * 24 * 60 * 60;
        }else if(source.id === "hoursBtn"){
            let hours = source.parentElement.querySelector("input").value;
            seconds = Number(hours) * 60 * 60;
        } else if(source.id === "minutesBtn"){
            let minutes = source.parentElement.querySelector("input").value;
            seconds = Number(minutes)* 60;
        }else if(source.id === "secondsBtn"){
            seconds = Number(source.parentElement.querySelector("input").value);   
        }

        document.querySelector("#days").value = seconds / (60 * 60 * 24);
        document.querySelector("#hours").value = seconds / (60 * 60);
        document.querySelector("#minutes").value = seconds / (60 );
        document.querySelector("#seconds").value = seconds ;
        
    }
    
}