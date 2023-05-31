function solve(words, text){
    text = text.split(' ');
    words = words.split(', ');
    for(let i = 0; i < text.length; i++){
        if(!text[i].startsWith('*')){
            continue;
        }

        let length = text[i].length;
        for (const word of words) {
            if(word.length == length){
                text[i] = word;
                break;
            }
        }

    }

    console.log(text.join(' '));
}

