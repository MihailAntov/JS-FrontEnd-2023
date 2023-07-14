function attachEventsListeners() {
    const inputUnits = document.querySelector("#inputUnits");
    const inputDistance = document.querySelector("#inputDistance");
    const outputUnits = document.querySelector("#outputUnits");
    const outputDistance = document.querySelector("#outputDistance");
    document.querySelector("#convert").addEventListener("click",clickHander);
    
    let map = {
        "km": 1000,
        "m" : 1,
        "cm" : 0.01,
        "mm" : 0.001,
        "mi" : 1609.34,
        "yrd" : 0.9144,
        "ft" : 0.3048,
        "in" : 0.0254

    }
    function clickHander(e){
        let meters = Number(inputDistance.value) * Number((map[inputUnits.value]));
        let result = meters / Number(map[outputUnits.value]);
        outputDistance.value = result;

    }
}


