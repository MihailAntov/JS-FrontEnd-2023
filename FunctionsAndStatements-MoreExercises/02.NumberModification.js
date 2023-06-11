function modify(n){
    n = n.toString();
    while(averageDigit(n) < 5){
        n+='9';
    }

    console.log(n);

    function averageDigit(number){
        let sum = 0;
        let counter = 0;
        for(let i = 0; i < number.toString().length; i++){
            sum+= Number(number.toString()[i]);
            counter++;
        }
        return sum / counter;
    }
}

modify(101);