function addressBook(input){
    let addresses = {};
    for (const line of input) {
        let [name, address] = line.split(':');
        addresses[name] = address;
    }

    let entries = Object.entries(addresses);
    entries.sort((a,b)=> a[0].localeCompare(b[0]))
    for (const [name, address] of entries) {
        console.log(`${name} -> ${address}`)
    }
}

addressBook(['Tim:Doe Crossing',
'Bill:Nelson Place',
'Peter:Carlyle Ave',
'Bill:Ornery Rd']
);