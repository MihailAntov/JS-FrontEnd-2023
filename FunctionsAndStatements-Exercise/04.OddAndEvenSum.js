function getSums(n){
    let arr = n.toString();
    let oddSum = 0;
    let evenSum = 0;
    for(let i = 0; i < arr.length; i++){
        if(Number(arr[i]) % 2 === 0){
            evenSum += Number(arr[i]);
        }
        else{
            oddSum +=Number(arr[i]);
        }
    }

    return `Odd sum = ${oddSum}, Even sum = ${evenSum}`;
}

console.log(getSums(1000435));