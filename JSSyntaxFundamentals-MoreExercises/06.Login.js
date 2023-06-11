function login(input){
    let username = input[0];
    let password = '';
    for (const letter of username) {
        password = letter + password;
    }

    for(let i = 1; i < 5; i++){
        if(input[i] === password){
            console.log(`User ${username} logged in.`);
            return;
        }
        else{
            if(i == 4){
                console.log(`User ${username} blocked!`);
                return;
            }
            
            console.log('Incorrect password. Try again.')
        }
    }
    
    
}
