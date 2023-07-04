class Laptop{
    constructor(info, quality){
        this.quality = quality;
        this.info = {producer: info.producer, age:info.age, brand:info.brand};
        this.isOn = false;
    };
    get price() {return  800 - (this.info.age * 2) + (this.quality * 0.5)};
    turnOn(){
        this.isOn = true;
        this.quality-=1;
    };
    turnOff(){
        this.isOn = false;
        this.quality-=1;
    };
    showInfo(){
        return JSON.stringify(this.info);
    };

}

