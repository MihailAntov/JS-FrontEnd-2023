function solve(input){
    let people = {}
    for (const name of input) {
        let length = name.length;
        people[name] = length;
    }

    let keys = Object.keys(people);
    for (const name of keys) {
        console.log(`Name: ${name} -- Personal Number: ${people[name]}`)
        
    }
}

solve([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
    ]
    )