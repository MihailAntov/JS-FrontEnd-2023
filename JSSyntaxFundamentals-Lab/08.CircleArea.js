function solve(circleArg){
    if(typeof(circleArg) == 'number'){
        return (Math.PI * circleArg * circleArg).toFixed(2);
    } else{
        return `We can not calculate the circle area, because we receive a ${typeof(circleArg)}.`;

    }
}

