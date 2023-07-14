function make_album( artist: string, title : string, tracks? : number) {
    let album : any ={
        artist : artist,
        title : title,
    }

    if (tracks){
        album.tracks = tracks;
    }
    return album;
}

let album1 = make_album("Artist-1", "Album-1");
let album2 = make_album("Artist-2", "Album-2", 4);
let album3 = make_album("Artist-3", "Album-3", 78);

console.log(album1);
console.log(album2);
console.log(album3);