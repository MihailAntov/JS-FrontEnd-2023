function clean(commands){
    let actions = new Map();
    actions.set('soap',a=>a+10);
    actions.set('water',a=>a*1.2);
    actions.set('vacuum cleaner',a=>a*=1.25);
    actions.set('mud',a=>a*0.9);
    let car = 0;
    for (const command of commands) {
        
        car = actions.get(command)(car);
    }

    console.log(`The car is ${car.toFixed(2)}% clean.`);
}


clean(['soap', 'soap', 'vacuum cleaner', 'mud', 'soap','water']);