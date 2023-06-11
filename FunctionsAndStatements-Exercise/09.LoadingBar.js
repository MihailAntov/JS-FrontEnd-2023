function visualizeLoadingBar(n){
    let filled = n / 10 ;
    let result = '';
    for(let i = 1; i <= 10; i++ ){
        if(i <= filled){
            result+='%';
        }
        else{
            result+='.';
        }
    }

    if(n<100){
        console.log(`${n}% [${result}]`);
        console.log('Still loading...');
    }else{
        console.log('100% complete!');
    }
}

visualizeLoadingBar(20);