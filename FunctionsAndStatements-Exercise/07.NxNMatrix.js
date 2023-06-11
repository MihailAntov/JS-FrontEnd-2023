function printMatrix(n){
    for(let i = 0; i < n; i ++){
        console.log(printRow(n));
    }

    function printRow(n){
        let result = [];
        for(let i = 0; i < n; i++){
            result.push(n);
        }
        return result.join(' ');
    }
}

printMatrix(5);