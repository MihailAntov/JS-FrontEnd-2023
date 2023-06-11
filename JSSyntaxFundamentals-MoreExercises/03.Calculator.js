function calculate(a, operation, b) {
    let result = 0;
    switch (operation) {
        case '+':
            result = a + b;
            break;
        case '-':
            result = a - b;
            break;
        case '*':
            result = a * b;
            break;
        case '/':
            result = a / b;
            break;
    }
    console.log(result.toFixed(2));
}

calculate(2,'+',3);