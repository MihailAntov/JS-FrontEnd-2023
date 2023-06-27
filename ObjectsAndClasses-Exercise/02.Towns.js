function solve(input){
    for (const line of input) {
        let [town, latitude, longitude] = line.split(' | ');
        latitude = Number(latitude).toFixed(2);
        longitude = Number(longitude).toFixed(2);
        let townObj = {town, latitude, longitude}
        console.log(townObj);
    }
    
}

