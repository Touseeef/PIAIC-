//Tests with strings and numbers
let myName : string = "Touseef";
console.log(`My Name = ${myName}`);

//Tests with String
console.log(`Is myName == 'Touseef? I predict its True'`)
console.log(myName === "Touseef"); //true

console.log(`Is myName != 'Touseef? I predict its False'`)
console.log(myName !== "Touseef"); //false

//Tests with LowerCase
console.log(`Name in lowerCased = ${myName}`);
console.log(`Is myName == 'touseef'? I predict its True'`)
console.log(myName.toLowerCase() == "touseef" ); //true

console.log(`Is myName != 'touseef'? I predict its false'`)
console.log(myName.toLowerCase() != "touseef" ); //false

//Tests with numbers
let number =5;
console.log(`My Number = ${number}`);

//Equality-Inequality
console.log("Is Number == '5'? I predict it's True")
console.log(number == 5)//true

console.log("Is Number != '5'? I predict it's False")
console.log(number != 5)//False

//Less than- Greater Than
console.log("Is Number < '10'? I predict it's True")
console.log(number < 10)//true

console.log("Is Number > '10'? I predict it's False")
console.log(number > 5)//False

//Less than or euql to- Greater Than or euql to
console.log("Is Number < '10'? I predict it's True")
console.log(number <= 10)//true

console.log("Is Number > '10'? I predict it's False")
console.log(number >= 10)//False

//AND operators 
console.log("Is Number Greater than '2' AND Equalt to '5'? I predict It's true")
console.log(number > 2 && number ==5);//true

console.log("Is Number Less than '2' AND not Equalt to '5'? I predict It's false")
console.log(number < 2 && number !=5 );//false

//OR operators
console.log("Is Number Greater than '2' OR Equalt to '10'? I predict It's true")
console.log(number > 2 || number ==5);//true

console.log("Is Number Less than '2' OR not Equalt to '5'? I predict It's false")
console.log(number < 2 || number !=5 );//false

//Whether an item is array
let myArray: number[] = [19, 23, 35, 60];
console.log("Is my Item array? I Predict it's true")
console.log(Array.isArray(myArray));//true

//Whether an item is not array
let notArray : number = 17;
console.log("Is my Item an array? I Predict it's false")
console.log(Array.isArray(notArray));//false

