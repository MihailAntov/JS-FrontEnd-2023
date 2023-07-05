function solve(input){
    let softUni = {};
    for (const entry of input) {
        if(entry.includes(':')){
            let [course, capacity] = entry.split(': ');
            if(!softUni.hasOwnProperty(course)){
                softUni[course] = {'capacity':Number(capacity), 'students': []}
            }else{
                softUni[course]['capacity'] += Number(capacity);
            }
        }else{
            let [usernameAndCredits, emailAndCourse] = entry.split(' with email ');
            let [username, credits] = usernameAndCredits.split('[');
            credits = credits.slice(0,-1);
            let [email, course] = emailAndCourse.split(' joins ');

            if(softUni.hasOwnProperty(course)){
                if(softUni[course].capacity > softUni[course].students.length){
                    softUni[course].students.push({'username': username, 'email': email, 'credits': credits});
                    
                }
            }
        }
    }
    
    let courses = Object.keys(softUni).sort((a,b)=> softUni[b].students.length - softUni[a].students.length);
    for (const course of courses) {
        console.log(`${course}: ${Number(softUni[course].capacity) - Number(softUni[course].students.length)} places left`);   
        for (const student of softUni[course].students.sort((a,b)=>b.credits - a.credits)) {
                console.log(`--- ${student.credits}: ${student.username}, ${student.email}`);
        }     
    }
}


solve(['JavaBasics: 2',
    'user1[25] with email user1@user.com joins C#Basics',
    'C#Advanced: 3',
    'JSCore: 4',
    'user2[30] with email user2@user.com joins C#Basics',
    'user13[50] with email user13@user.com joins JSCore',
    'user1[25] with email user1@user.com joins JSCore',
    'user8[18] with email user8@user.com joins C#Advanced',
    'user6[85] with email user6@user.com joins JSCore',
    'JSCore: 2',
    'user11[3] with email user11@user.com joins JavaBasics',
    'user45[105] with email user45@user.com joins JSCore',
    'user007[20] with email user007@user.com joins JSCore',
    'user700[29] with email user700@user.com joins JSCore',
    'user900[88] with email user900@user.com joins JSCore']);