function solve(input){
    let decoded = input.map(e=> JSON.parse(e));
    let result = {};

    for (const word of decoded) {
        for (const key in word) {
            result[key] = word[key];
        }
    }

    let keys = Object.keys(result)
    .sort((a,b)=>a.localeCompare(b))

    for (const key of keys) {
        console.log(`Term: ${key} => Definition: ${result[key]}`);
    }

}
