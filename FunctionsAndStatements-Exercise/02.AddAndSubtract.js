function addAndSubtract(a,b,c){
    let add = (a,b) => a+b;
    let subtract = (a,b) => a-b;
    return subtract(add(a,b),c);    
}