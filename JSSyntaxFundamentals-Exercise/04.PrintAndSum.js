function solve(start, end){
    let result = 0;
    let vault = [];
    for(let i = start; i <= end; i++)
    {
        result += i;
        vault.push(i);
    }

    console.log(vault.join(' '));
    console.log(`Sum: ${result}`);
}


