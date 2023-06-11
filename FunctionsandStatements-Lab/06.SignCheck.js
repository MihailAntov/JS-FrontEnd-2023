function checkSign(...args){
    let negativeCount = 0;
    for (const num of args) {
        if(num.toString()[0] === '-'){
            negativeCount++;
        }
    }

    if(negativeCount % 2 === 0){
        return 'Positive';
    }
    else{
        return 'Negative';
    }
}

console.log(checkSign(5,-12,-16));