function phoneBook(input){
    let phones = {};
    for (const line of input) {
        let [name,phone] = line.split(' ');
        phones[name] = phone;
    }
    
    let entries = Object.keys(phones);
    for (const name of entries) {
        console.log(`${name} -> ${phones[name]}`)
    }
}


phoneBook(['Tim 0834212554',
'Peter 0877547887',
'Bill 0896543112',
'Tim 0876566344'])
