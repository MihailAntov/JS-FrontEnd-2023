function catalogue(input){
    let result = {};
    let elements = input
    .map(e=> e.split(' : '))
    .forEach(([key,value]) => {
        let letter = key[0];
        if(!result.hasOwnProperty(letter)){
            result[letter] = {};
        }

        result[letter][key] = value;
    });

    let keys = Object.keys(result)
    .sort((a,b)=>a.localeCompare(b));

    for (const key of keys) {
        console.log(key);
        let items = Object.keys(result[key])
        .sort((a,b)=>a.localeCompare(b));
        for (const item of items) {
            console.log(`   ${item}: ${result[key][item]}`)            
        }
    }
}

catalogue([
    'Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10'
    ]
    )