function solve(input){
    let heroes = [];
    for (const line of input) {
        let [name, level, ...items] = line.split(' / ');

        let hero = {name, level, items};
        heroes.push(hero);
    }

    heroes.sort((a,b) => a.level - b.level);

    for (const hero of heroes) {
        console.log(`Hero: ${hero.name}`);
        console.log(`level => ${hero.level}`);
        console.log(`items => ${hero.items.join(', ')}`);
    }
}

solve([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
    ]
    )