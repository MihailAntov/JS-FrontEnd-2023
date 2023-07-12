function sumTable() {
    const sum = Array.from(document.querySelector("tbody").children)
    .slice(1,-1)
    .map(r=>Number(r.children[1].textContent))
    .reduce((sum,current) => sum+= current,0);

    const sumElement = document.querySelector("#sum");
    sumElement.textContent = sum;
    
}