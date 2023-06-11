function laser(args) {
    let final = args[0];
    let crystals = args.slice(1);
    const operations = new Map();
    operations.set('Cut', c => c / 4);
    operations.set('Lap', c => 0.8 * c);
    operations.set('Grind', c => c - 20);
    operations.set('Etch', c => c - 2);


    for (const crystal of crystals) {
        let c = crystal;
        console.log(`Processing chunk ${c} microns`);

        let order = ['Cut', 'Lap', 'Grind', 'Etch'];
        let currentOp = 0;
        let count = 0;
        while(currentOp <= 3){
            let prospect = operations.get(order[currentOp])(c);
            if(prospect <= final - 2){
                if(count> 0){
                    c = Math.floor(c);
                    console.log(`${order[currentOp]} x${count}`)
                    console.log('Transporting and washing');

                }
                currentOp++;
                count = 0;
                continue;
            }
            
            count++;
            c = prospect;
        }

        if(c < final){
            console.log('X-ray x1');
            c+=1;
        }

        if(c === final){
            console.log(`Finished crystal ${c} microns`);
        }



    }
}

