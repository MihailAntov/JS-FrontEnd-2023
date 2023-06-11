function solve(a,b){
    console.log((factorial(a)/ factorial(b)).toFixed(2));

    function factorial(n){
        let result = 1;
        while(n > 0){
            result *= n;
            n--;
        }
        return result;
    }
}

solve(5,2);