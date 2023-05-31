function solve(number){
    let digit = number % 10;
    let sum = 0;
    let done = false;

    while(number > 0){
        if(digit != number % 10){
            if(!done){
                console.log(false);
                done = true;
            }
        }
        digit = number % 10;
        number = Math.floor(number/10);
        sum += digit;
    }

    if(!done){
        console.log(true);
    }

    console.log(sum);
}

