function getRange(a,b){
    let start = Math.min(a.charCodeAt(0),b.charCodeAt(0));
    let end = Math.max(a.charCodeAt(0),b.charCodeAt(0));
    let result = [];
    for(let i = start+1;i < end; i++){
        result.push(String.fromCharCode(i));
    }
    return result.join(' ');
}

