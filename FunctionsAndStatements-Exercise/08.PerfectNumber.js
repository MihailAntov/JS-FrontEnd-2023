function isPerfect(n){
    let divisorSum = 0;
    for(let i = 1; i < n;i++){
        if(n%i === 0){
            divisorSum+= i;
        }
    }

    if(n === divisorSum){
        console.log('We have a perfect number!');
    }else{
        console.log('It\'s not so perfect.');
    }
}

isPerfect(1236498);