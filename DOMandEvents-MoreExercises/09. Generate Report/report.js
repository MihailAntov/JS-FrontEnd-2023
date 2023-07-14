function generateReport() {
    let columns = Array.from(document.querySelectorAll("thead tr th input"));
    let rows = Array.from(document.querySelectorAll("tbody tr"));
    
    let indices = [];
    for(let i = 0; i < columns.length; i++){
        if(columns[i].checked){
            indices.push(i);
        }
    }

    let result = [];

    for (const row of rows) {
        let resultRow = {};
        console.log(indices);
        for (const index of indices) {
            let colName = columns[index].name;
            resultRow[colName] = row.children[index].textContent;
        }
        result.push(resultRow);
    }
    
    document.querySelector("#output").textContent = JSON.stringify(result);

}