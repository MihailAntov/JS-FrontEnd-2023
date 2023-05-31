function solve(word, text){
    text = text.toLowerCase().split(' ');
    for (const currentWord of text) {
        if(currentWord === word.toLowerCase()){
            return `${word}`;
        }
    }

    return `${word} not found!`;

}

