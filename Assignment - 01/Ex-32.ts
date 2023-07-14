let current_users : string[] = ["admin","touseef","ali","moosa","salman","john"];
let new_users : string[] = ["JOHN","haseeb","TOUsEef","alyan","huzaifa"];

for( let i = 0; i < new_users.length ; i ++){
    let username_taken = false;
    for(let j = 0; j < current_users.length ; j++){
        if( new_users[i].toLowerCase() === current_users[j].toLowerCase())
        {
            username_taken = true;
            break;
        }
    }
    if(username_taken){
        console.log(`We are sorry, this username: ${new_users[i]} is already taken`)
    } else if (username_taken == false) {
        console.log(`The username: ${new_users[i]} is available.`)
    }
}