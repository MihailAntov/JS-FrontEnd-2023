function checkValidity(x1,y1,x2,y2){

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

checkValidity(3,0,0,4);
checkValidity(2,1,1,1);