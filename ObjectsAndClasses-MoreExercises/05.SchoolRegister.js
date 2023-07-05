function schoolRegister(input) {
    input = input.map(s => s.split(', '));
    let register = {}
    for (const student of input) {
        let name = student[0].split(': ')[1];
        let grade = student[1].split(': ')[1];
        let score = student[2].split(': ')[1];

        if (!register.hasOwnProperty(grade)) {
            register[grade] = [];
        }

        register[grade].push({ name: name, score: score });
    }

    for (const grade in register) {
        let currentGrade = register[grade].filter(s => s.score >= 3.00);
        if(currentGrade.length === 0){
            continue;
        }
        console.log(`${Number(grade) + 1} Grade`)
        let sumScore = currentGrade.map(s => s.score)
            .reduce((sum, score) => Number(sum) + Number(score), 0);
        let numberOfstudents = currentGrade.length;
        let avgScore = (sumScore / numberOfstudents).toFixed(2);

        let names = currentGrade
            .map(s => s.name);

        console.log(`List of students: ${names.join(', ')}`);
        console.log(`Average annual score from last year: ${avgScore}`);
        console.log();
    }
}

