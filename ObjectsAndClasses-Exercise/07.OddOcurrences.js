function solve(input){
    let words = input.split(' ');
    let results = {};
    for (const word of words) {
        let key = word.toLowerCase();
        if(!results.hasOwnProperty(key)){
            results[key] = 0;
        }
        results[key]++;
    }

    let keys = Object.keys(results)
    .filter(k => results[k] % 2 !== 0);

    console.log(keys.join(' '));
}

solve('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');