function validate() {
    const regex = /^[a-z]+@[a-z]+.[a-z]+$/g;
    const email = document.getElementById("email");
    email.addEventListener("change",changeHandler);

    function changeHandler(e){
        if(email.value.match(regex)){
            email.classList.remove("error");
            console.log("yes");
        }else{
            email.classList.add("error");
            console.log("no");
        }
    }
}