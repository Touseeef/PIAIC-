let person_name : string = " \t Eren \n Yeager";
console.log(`Name with Whitespaces: "${person_name}"`);
console.log(`Name without Whitespaces:  ${person_name.replace(/\t/g, "").replace(/\n/g, "")}`);