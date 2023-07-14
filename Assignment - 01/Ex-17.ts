//Shrinking Guests List
let guestsArray3 : string[] = ["Huzaifa","Alyan","Salman"];
let absentGuest3 : string = "Alyan";
let newInvite1: string = "Moosa";
let newInvite2: string = "Ali";
let newInvite3: string ="Haseeb";
//Old List of Guests
console.log("Old List of Guests: ")
for( let i=0; i<guestsArray3.length; i++)
{
    console.log(`Hi ${guestsArray3[i]}, you are invited to the Party!!!`);
}

console.log("\n*** We have a bigger table so now we can invite more guests :\n)***");

guestsArray3.unshift(`${newInvite1}`);
let middleIndex2: number = Math.floor(guestsArray3.length/2);
guestsArray3.splice(middleIndex2, 0,`${newInvite2}`);
guestsArray3.push(`${newInvite3}`);

for( let i=0; i<guestsArray3.length; i++)
{
    console.log(`Hi ${guestsArray3[i]}, you are invited to the Party`);
}
console.log("Apologies, the new dinner table won't arrive in time. We can only invite two people for dinner.");

//Removing Guests untill 2 remain
while (guestsArray3.length>2)
{
    const removedGeust = guestsArray3.pop();
    console.log(`We are Sorry ${removedGeust}, We can't invite yout to the dinner:/ `);
};
//Printing message to invited Guests
for( let i=0; i < guestsArray3.length; i++)
{
    console.log(`Hi ${guestsArray3[i]}, you are still invited to the Party`);
};
// Removing Last 2 Guests
while ( guestsArray3.length>0)
{
    guestsArray3.pop();
};