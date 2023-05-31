function solve(text, word){
    return text.split(' ').filter(w=> w===word).length;
}

