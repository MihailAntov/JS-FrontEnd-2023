function print(count){
    let symbols = ['A','T','C','G','T','T','A','G','G','G'];
    let rising = true;
    let currentposition = 1;
    let line = '';
    for(let i = 0; i < count; i++){
        if(rising){
            currentposition++;
            if(currentposition === 2){
                rising = false;
            }
        }else{
            currentposition--;
            if(currentposition===0){
                rising = true;
            }
        }
        let firstSymbol = symbols.shift();
        symbols.push(firstSymbol);
        let secondSymbol = symbols.shift();
        symbols.push(secondSymbol);

        let line = '';
        if(currentposition===0){
            line = `${firstSymbol}----${secondSymbol}`;
        }else if(currentposition === 1){
            line = `*${firstSymbol}--${secondSymbol}*`;
        }else if (currentposition === 2){
            line = `**${firstSymbol}${secondSymbol}**`;
        }

        console.log(line);
    }
}

