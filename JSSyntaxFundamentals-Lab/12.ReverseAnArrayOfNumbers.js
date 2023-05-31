function solve(n, array){
    let newArray = array.slice(0,n);
    newArray = newArray.reverse();
    return newArray.join(' ');
}

