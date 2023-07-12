function colorize() {
    let evenRows = [...document.querySelectorAll("tr:nth-child(even)")];
    evenRows.forEach(r=> r.style.backgroundColor = "teal");
    
}