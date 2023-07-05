function solve(input){
    let library = {}
    for (const entry of input) {
        if(entry.includes('->')){
            let [id, genre] = entry.split(' -> ');
            if(!library.hasOwnProperty(id)){
                library[id] = {genre: genre, 'books':[]}
            }
        }else{
            let [title, rest] = entry.split(': ');
            let [author, genre] = rest.split(', ');
            
            let shelf = Object.keys(library).find(s=>library[s]['genre'] === genre);
            if(shelf){
                let book = {'title':title, 'author':author};
                library[shelf]['books'].push(book);
            }
        }
    }

    let shelves = Object.keys(library).sort((a,b)=>library[b]['books'].length - library[a]['books'].length);
    for (const shelf of shelves) {
        console.log(`${shelf} ${library[shelf].genre}: ${library[shelf].books.length}`);
        let bookList = library[shelf].books.sort((a,b)=>a.title.localeCompare(b.title));
        for (const book of bookList) {
            console.log(`--> ${book.title}: ${book.author}`);
        }
    }
}


solve(['1 -> history', '1 -> action', 'Death in Time: Criss Bell, mystery',
'2 -> mystery', '3 -> sci-fi', 'Child of Silver: Bruce Rich, mystery',
'Hurting Secrets: Dustin Bolt, action', 'Future of Dawn: Aiden Rose, sci-fi',
'Lions and Rats: Gabe Roads, history', '2 -> romance', 'Effect of the Void: Shay B, romance',
'Losing Dreams: Gail Starr, sci-fi', 'Name of Earth: Jo Bell, scifi', 'Pilots of Stone: Brook Jay, history']
)