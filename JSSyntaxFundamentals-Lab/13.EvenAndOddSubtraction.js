function solve(nums){
    let evens = nums.filter(num=>num % 2 == 0);
    let odds = nums.filter(num=>num % 2 != 0);

    let evenSum = 0;
    evens.forEach(element => {
        evenSum+= element;
    });

    let oddSum = 0;
    odds.forEach(element => {
    oddSum += element;
    });

    return evenSum-oddSum;
}