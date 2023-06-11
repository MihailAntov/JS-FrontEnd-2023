function checkValidity(args){
    let x1 = args[0];
    let y1 = args[1];
    let x2 = args[2];
    let y2 = args[3];
    getDistance(x1,y1,0,0);
    getDistance(x2,y2,0,0);
    getDistance(x1,y1,x2,y2);
 
    function getDistance(x1,y1,x2,y2){
        if((Math.sqrt(Math.pow((x2-x1),2) + Math.pow((y2-y1),2))) % 1 === 0){
            console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
        } else{
            console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
        }
    }
}
