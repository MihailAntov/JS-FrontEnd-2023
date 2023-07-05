function solve(input){
    let armies = {};
    for (const entry of input) {
        if(entry.includes('arrives')){
            let general = entry.split(' ').slice(0,-1).join(' ');
            armies[general] = {};
        }else if(entry.includes(':')){
            let [general, army, count] = entry.split(' ');
            general = general.slice(0,-1);
            army = army.slice(0,-1);
            if(armies.hasOwnProperty(general)){
                
                armies[general][army] = Number(count);
            }
        }else if(entry.includes('+')){
            let [army, count] = entry.split(' + ');
            for (const name in armies) {
                if(armies[name].hasOwnProperty(army)){
                    armies[name][army]+= Number(count);
                    break;
                }
            }
            
        }else if(entry.includes('defeated')){
            let general = entry.split(' ').slice(0,-1).join(' ');
            delete armies[general];
        }
    }

    let generals = Object.keys(armies).sort((a,b) => totalArmies(b) - totalArmies(a));
    for (const general of generals) {
        console.log(`${general}: ${totalArmies(general)}`);
        let armyList = Object.keys(armies[general]).sort((a,b)=>armies[general][b] - armies[general][a]);
        for (const army of armyList) {
            console.log(`>>> ${army} - ${armies[general][army]}`);
        }
    }


    function totalArmies(name){
        return Object.values(armies[name]).reduce((sum, a)=> Number(sum)+ Number(a),0);
    }
}

solve(['Rick Burr arrives', 'Fergus: Wexamp, 30245', 'Rick Burr: Juard, 50000', 'Findlay arrives', 'Findlay: Britox, 34540', 'Wexamp + 6000', 'Juard + 1350', 'Britox + 4500', 'Porter arrives', 'Porter: Legion, 55000', 'Legion + 302', 'Rick Burr defeated', 'Porter: Retix, 3205'])