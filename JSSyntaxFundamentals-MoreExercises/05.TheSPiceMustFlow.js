function calculateSpice(yield){
    let profit = 0;
    let days  = 0;
    while(yield>=100){
        profit += yield;
        profit -= 26;
        if(profit<0){
            profit = 0;
        }
        yield-=10;
        days++;
    }

    profit-= 26;
    if(profit<0){
        profit=0;
    }

    console.log(days);
    console.log(profit);
}


calculateSpice(111);