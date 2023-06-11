function formatGrade(grade){
    let text;
    let digits =2;
    if(grade <3.00){
        text = 'Fail';
        grade = 2;
        digits = 0;
    }else if(grade< 3.50){
        text = 'Poor';
    }else if(grade < 4.50){
        text = 'Good';
    }else if(grade < 5.50){
        text = 'Very good';
    }else{
        text = 'Excellent';
    }

    console.log(`${text} (${grade.toFixed(digits)})`);
}

formatGrade(2.99);