function solve(num, ...operations){
    for (const operation of operations) {
        switch(operation){
            case 'chop':
                num /=2;
                break;
                case 'dice':
                num = Math.sqrt(num);
                break;
                case 'spice':
                num +=1;
                break;
                case 'bake':
                num *=3;
                break;
                case 'fillet':
                num = num - 0.2*num;
                break;
        }
        console.log(num);
    }
}

