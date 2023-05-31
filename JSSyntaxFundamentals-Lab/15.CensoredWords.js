function solve(text, word){
    let solved = text;
    while(solved.includes(word)){
        solved = solved.replace(word, repeat(word));
    }

    return solved;


    function repeat(word){
        let result = '';
        for (let i = 0; i < word.length; i++) {
            result+='*';
        }
        return result;
    }
}

