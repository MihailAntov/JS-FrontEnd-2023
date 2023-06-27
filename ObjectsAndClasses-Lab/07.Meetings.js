function meetings(input){
    let schedule = {};
    for (const line of input) {
        let [day, name] = line.split(' ');

        if(schedule.hasOwnProperty(day)){
            console.log(`Conflict on ${day}!`);
        }else{
            schedule[day] = name;
            console.log(`Scheduled for ${day}`);
        }
    }

    let entries = Object.entries(schedule);
    for (const [day,name] of entries) {
        console.log(`${day} -> ${name}`)
    }
}

meetings(['Friday Bob',
'Saturday Ted',
'Monday Bill',
'Monday John',
'Wednesday George'])