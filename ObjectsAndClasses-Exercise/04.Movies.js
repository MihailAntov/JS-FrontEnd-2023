function solve(input){
    let films = {};
    for (const line of input) { 
        let tokens = line.split(' ');
        if(tokens[0] === 'addMovie'){
            tokens.shift();
            let name = tokens.join(' ');
            let film = {'name' :name}
            films[name] = {name};
        } else if (line.includes('onDate')){
            let [name, dateInput] = line.split(' onDate ');
            if(films.hasOwnProperty(name)){
                films[name]['date'] = dateInput;
            }
        } else if (line.includes('directedBy')){
            let [name, directorInput] = line.split(' directedBy ');
            if(films.hasOwnProperty(name)){
                films[name]['director'] = directorInput;
            }
        }
    }
    
    
    for (const key in films) {
        let film = films[key];
        if(film.hasOwnProperty('date') && film.hasOwnProperty('director')){
            console.log(JSON.stringify(film));
        }
    }
}

solve([
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'
    ]
    
    );