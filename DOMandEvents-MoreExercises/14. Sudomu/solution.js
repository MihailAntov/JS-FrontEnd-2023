function solve() {
    const table = document.querySelector("table");
    const buttons = [...document.querySelectorAll("button")];
    const quickCheck = buttons[0];
    quickCheck.addEventListener("click",checkHandler);
    const clear = buttons[1];
    clear.addEventListener("click",clearHandler);
    const result = document.querySelector("#check > p");
    const frame = document.querySelector("table");
    
    function checkHandler(e){
        let solved = true;
        const table = document.querySelector("tbody");
        for (let row = 0; row < 3; row++){
            let sum = 0;
            for(let col = 0; col < 3; col++){
                sum+= Number(table.children[row].children[col].children[0].value);
                console.log(table.children[row].children[col].children[0].value);
            }
            if(sum !== 6){
                solved = false;
            }
        }

        for (let col = 0; col < 3; col++){
            let sum = 0;
            for(let row = 0; row < 3; row++){
                sum+= Number(table.children[row].children[col].children[0].value);
            }
            if(sum !== 6){
                solved = false;
            }
        }

        if(solved){

            frame.style.border = "2px solid green";
            result.textContent = "You solve it! Congratulations!";
            result.style.color = "green";
        }else{

            frame.style.border = "2px solid red";
            result.textContent = "NOP! You are not done yet...";
            result.style.color = "red";
        }



    }

    function clearHandler(e){
        [...document.querySelectorAll("input")]
        .forEach(e=> e.value = null);

        result.textContent = null;
        frame.style.border = "none";
    }
}