//Bigger Dinner Table
let guestsArray2 : string[] = ["Huzaifa","Alyan","Salman"];
let absentGuest2 : string = "Alyan";
let newInvitee1: string = "Moosa";
let newInvitee2: string = "Ali";
let newInvitee3: string ="Haseeb";

console.log("Old List of Guests: ")
for( let i=0; i<guestsArray2.length; i++)
{
    console.log(`Hi ${guestsArray2[i]}, you are invited to the Party!!!`);
}

console.log("\n*** We have a bigger table so now we can invite more guests :)***");

guestsArray2.unshift(`${newInvitee1}`);
let middleIndex: number = Math.floor(guestsArray2.length/2);
guestsArray2.splice(middleIndex, 0,`${newInvitee2}`);
guestsArray2.push(`${newInvitee3}`);

for( let i=0; i<guestsArray2.length; i++)
{
    console.log(`Hi ${guestsArray2[i]}, you are invited to the Party`);
}