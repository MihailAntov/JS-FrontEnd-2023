function flightSchedule([flights,statuses,check]){
    let schedule = {};
    for (const entry of flights) {
        let flight = entry.split(' ');
        let flightNumber = flight.shift();
        let destination = flight.join(' ');
        schedule[flightNumber] = {Destination: destination, Status:'Ready to fly'};
    }
    
    
    

    for (const entry of statuses) {
        let status = entry.split(' ');
        let flightNumber = status.shift();
        if(schedule.hasOwnProperty(flightNumber)){
            schedule[flightNumber].Status = 'Cancelled';
        }
    }


    let statusToCheck = check[0];

    let keys = Object.keys(schedule)
    .filter(k=> schedule[k].Status === statusToCheck)
    .forEach(k=> console.log(JSON.stringify(schedule[k])));
}


flightSchedule([['WN269 Delaware',
'FL2269 Oregon',
'WN498 Las Vegas',
'WN3145 Ohio',
'WN612 Alabama',
'WN4010 New York',
'WN1173 California',
'DL2120 Texas',
'KL5744 Illinois',
'WN678 Pennsylvania'],
['DL2120 Cancelled',
'WN612 Cancelled',
'WN1173 Cancelled',
'SK430 Cancelled'],
['Cancelled']
]
)