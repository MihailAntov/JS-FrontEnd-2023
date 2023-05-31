function solve(names){
    names.sort((nameA,nameB)=>nameA.localeCompare(nameB));
    for(let i = 0; i < names.length; i++){
        console.log(`${i+1}.${names[i]}`);
    }
}

