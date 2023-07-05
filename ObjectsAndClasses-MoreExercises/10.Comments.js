function solve(input){
    let users = [];
    let articles = {};
    for (const entry of input) {
        if(entry.includes('user')){
          let  [_,username] = entry.split(' ');
           users.push(username);
        }else if(entry.includes('article')){
            let [_, article] = entry.split(' ');
            articles[article] = [];
        }else if(entry.includes('posts')){
            let [identifiers, comment] = entry.split(': ');
            let [username, article] = identifiers.split(' posts on ');
            let [title, content] = comment.split(', ');

            if(!users.includes(username) || !articles.hasOwnProperty(article)){
                continue;
            }

            articles[article].push({username: username, title: title, content: content});

        }
    }

    let sorted = Object.keys(articles).sort((a,b)=>articles[b].length - articles[a].length);
    for (const article of sorted) {
        console.log(`Comments on ${article}`);
        for (const comment of articles[article].sort((a,b)=>a.username.localeCompare(b.username))) {
            console.log(`--- From user ${comment.username}: ${comment.title} - ${comment.content}`);
        }
    }

  
}


solve(['user aUser123', 'someUser posts on someArticle: NoTitle, stupidComment', 'article Books',
'article Movies', 'article Shopping', 'user someUser', 'user uSeR4', 'user lastUser',
'uSeR4 posts on Books: I like books, I do really like them',
'uSeR4 posts on Movies: I also like movies, I really do',
'someUser posts on Shopping: title, I go shopping every day',
'someUser posts on Movies: Like, I also like movies very much']);