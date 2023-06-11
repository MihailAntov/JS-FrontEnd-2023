function mine(shifts){
    let savings = 0;
    let bitcoins = 0;
    let day = 0;
    const price = 11949.16;
    for(let i = 0; i < shifts.length; i++){
        let grams = shifts[i];
        if((i+1) % 3 == 0){
            grams -= grams * 0.3;
        } 

        savings += grams * 67.51;

        if(savings >= price){
            let purchase = Math.trunc(savings / price);
            savings -= price * purchase;
            
            if(bitcoins === 0){
                day = i+1; 
            }
            bitcoins+= purchase;
        }
    }

    console.log(`Bought bitcoins: ${bitcoins}`);
    if(bitcoins>0){
        console.log(`Day of the first purchased bitcoin: ${day}`);
    }
    console.log(`Left money: ${savings.toFixed(2)} lv.`);
}

mine([100,200,300]);