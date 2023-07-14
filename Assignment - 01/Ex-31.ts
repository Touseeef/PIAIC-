//Checking if array is empty
let usernames2 : string[] = []; //removed usernames 
if( usernames2.length === 0){
    console.log("We need to find some users!");
} else 
{
        for ( let i = 0 ; i< usernames2.length ; i++)
    {
        if(usernames2[i] === 'admin'){
            console.log(`Hello ${usernames2[i]}, would you like to see status report?`)
        } else {
            console.log(`Hello ${usernames2[i]}, thank you for logging in again`)
        }
    };
}
