function sequences(input){
    let uniqueArrays = [];
    for (const thisArr of input) {
        let sorted = JSON.parse(thisArr).sort((a,b)=>b-a);
        let exists = uniqueArrays.find(a=> arraysEqual(a, sorted));
        if(!exists){
            uniqueArrays.push(sorted);
        }
    }
    
    console.log(uniqueArrays.sort((a,b)=>a.length - b.length).map(t=>`[${t.join(', ')}]`).join('\n'));

    function arraysEqual(arrA, arrB){
        for(let i = 0; i < arrA.length; i++){
            if(arrA[i] !== arrB[i]){
                return false;
            }
        }
        return true;
    }
}


sequences(["[-3, -2, -1, 0, 1, 2, 3, 4]",
"[10, 1, -17, 0, 2, 13]",
"[4, -3, 3, -2, 2, -1, 1, 0]"]);