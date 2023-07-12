function deleteByEmail() {
    let toBeDeleted = document.querySelector("input[name=email]").value;
    let result = document.querySelector("#result");
    let emails = [...document.querySelectorAll("tr > td:nth-child(even)")];
    if(found = emails.find(e=> e.textContent === toBeDeleted)){
        result.textContent = "Deleted.";
        found.parentElement.remove();
    }else{
        result.textContent = "Not found.";
    }
    
}