function songsFunction(input){
    class Song {
        constructor(typeList, name, time){
            this.typeList = typeList,
            this.name = name,
            this.time = time
        }
    }

    let number = input.shift();
    let desiredType = input.pop();
    
    let songList = [];
    for (const line of input) {
        let [typeList, name, time] = line.split('_');
        let song = new Song(typeList, name, time);
        songList.push(song);
    }

    if(desiredType === 'all'){
        for (const song of songList) {
            console.log(song.name);
        }
    }else{
        for (const song of songList.filter(s=> s.typeList === desiredType)) {
            console.log(song.name);
        }
    }
}

songsFunction([2,
    'like_Replay_3:15',
    'ban_Photoshop_3:48',
    'all'])
