function validate(password){
    let messages = [];

    if(password.length < 6 || password.length > 10){
        messages.push('Password must be between 6 and 10 characters');
    }

    if(!isOnlyDigitsAndLetters(password)){
        messages.push('Password must consist only of letters and digits');
    }

    if(countDigits(password) < 2){
        messages.push('Password must have at least 2 digits');
    }


    if(messages.length === 0){
        console.log('Password is valid');
    }else{
        for (const message of messages) {
            console.log(message);
        }
    }




    function isOnlyDigitsAndLetters(password){
        for (const char of password) {
            let value = char.charCodeAt(0);
            if((value >= 48 && value <= 57) || (value >=65 && value <= 90) || (value>=97 && value <= 122)){
                continue;
            }

            return false;
        }
        return true;
    }

    function countDigits(password){
        let result = 0;
        for (const char of password) {
            if(char.charCodeAt(0) >= 48 && char.charCodeAt(0)<= 57){
                result++;
            }
        }
        return result;
    }

}

validate('logIn');