function solve(input){
    
    let parkingLot = {}
    for (const entry of input) {
        let [operation, carNumber] = entry.split(', ');
        parkingLot[carNumber] = operation;
    }

    let keys = Object.keys(parkingLot)
    .filter(k=> parkingLot[k] === 'IN');
    if(keys.length === 0){
        console.log(`Parking Lot is Empty`);
    }else{
        let sorted = keys.sort((a,b) => a.localeCompare(b));
        for (const carNumber of sorted) {
            console.log(carNumber)
        }
    }   
}

solve(['IN, CA2844AA',
'IN, CA1234TA',
'OUT, CA2844AA',
'IN, CA9999TT',
'IN, CA2866HI',
'OUT, CA1234TA',
'IN, CA2844AA',
'OUT, CA2866HI',
'IN, CA9876HH',
'IN, CA2822UU']
);