let guestsArray1 : string[] = ["Huzaifa","Alyan","Salman"];
let absentGuest : string = "Alyan";
let newGuest : string = "Moosa";

let indexOfAbsent: number = guestsArray1.indexOf(absentGuest);
guestsArray1[indexOfAbsent] = newGuest;
console.log(`The Absent Guest is ${absentGuest}`);

console.log("Updated Guests list: ")
for( let j =0; j< guestsArray1.length; j++)
{
    console.log(`Hi ${guestsArray1[j]}, you are invited to the Party!!!`);
};