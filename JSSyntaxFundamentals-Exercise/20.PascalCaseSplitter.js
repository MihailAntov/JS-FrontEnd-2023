function solve(text){
    let buffer = '';
    let results = [];
    for(let i = 0; i < text.length; i++){
        if(text[i].charCodeAt(0) >= 65 && text[i].charCodeAt(0)<=90){
            //add word
            if(buffer.length > 0){
                results.push(buffer);
                buffer = '';
            }
            //empty buffer
        }

        buffer+= text[i];
        
    }
    if(buffer.length > 0){
        results.push(buffer);
    }

    console.log(results.join(', '));
}

