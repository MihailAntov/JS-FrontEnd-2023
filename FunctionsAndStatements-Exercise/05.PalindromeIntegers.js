function findPalindromes(ints){
    for (const number of ints) {
        console.log(checkIfPalindrome(number));
    }


    function checkIfPalindrome(number){
        for(let i = 0 ; i < number.toString().length; i++){
            if(number.toString()[i] !== number.toString()[number.toString().length-1-i]){
                return false;
            }
        }
        return true;
        
    }
}

findPalindromes([11111,12345,12321]);