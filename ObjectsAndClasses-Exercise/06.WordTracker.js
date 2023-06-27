function solve(input){
    let [...targets] = input.shift().split(' ');
    let results = {};
    for (const target of targets) {
        results[target] = 0;
    }
    for (const word of input) {
        if(targets.includes(word)){
            results[word]++;
        }
    }

    let keys = Object.keys(results)
    .sort((k1, k2) => results[k2] - results[k1]);

    for (const key of keys) {
        console.log(`${key} - ${results[key]}`)
    }
}

solve([
    'this sentence',
    'In', 'this', 'sentence', 'you', 'have',
    'to', 'count', 'the', 'occurrences', 'of',
    'the', 'words', 'this', 'and', 'sentence',
    'because', 'this', 'is', 'your', 'task'
    ]
    );