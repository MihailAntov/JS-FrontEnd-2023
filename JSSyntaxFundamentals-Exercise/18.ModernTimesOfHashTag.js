function solve(input){
    
    let result = input.split(' ')
        .filter(w=> w.startsWith('#') && w.length > 1)
        .map(w=>w.substring(1))
        .filter(w=>onlyLetters(w));

    console.log(result.join('\r\n'));

    function onlyLetters(word){
        for (const chararcter of word) {
            let symbol = chararcter.toLowerCase().charCodeAt(0);
            if(symbol < 97 || symbol > 122){
                return false;
            }
        }
        return true;
    }
}

