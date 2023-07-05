function solve(input){
    let garage = {};
    for (const carInput of input) {
        let garageNumber = Number(carInput.split(' - ')[0]);
        if(!garage.hasOwnProperty(garageNumber)){
            garage[garageNumber] = [];
        }
        let carAsArr = carInput.split(' - ')[1];
        let args = carAsArr.split(', ');
        let car = {};
        for (const arg of args) {
            let [key,value] = arg.split(': ');
            car[key] = value;
        }
        garage[garageNumber].push(car);
    }

    for (const number in garage) {
        console.log(`Garage № ${number}`);
        for (const car of garage[number]) {
            console.log(`--- ${Object.keys(car).map(k=>`${k} - ${car[k]}`).join(', ')}`);
        }
   
    }
}

solve(['1 - color: blue, fuel type: diesel', '1 - color: red, manufacture: Audi', '2 - fuel type: petrol', '4 - color: dark blue, fuel type: diesel, manufacture: Fiat']);