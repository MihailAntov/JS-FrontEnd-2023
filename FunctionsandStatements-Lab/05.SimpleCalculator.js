function calculator(a, b, operation){
    
    let operations = new Map();
    operations.set('add',(a,b)=>a+b);
    operations.set('subtract',(a,b)=>a-b);
    operations.set('multiply',(a,b)=>a*b);
    operations.set('divide',(a,b)=>a/b);

    return operations.get(operation)(a,b);
}

console.log(calculator(5,3,'add'));