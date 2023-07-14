let animal_names : string[] = ["Cheetah","Cat","Lion"];

//Printing Names
for( let i = 0; i < animal_names.length; i++){
    console.log(animal_names[i]);
};

//Printing sentences with names
for( let i = 0; i < animal_names.length; i++){
    console.log(`${animal_names[i]} would make a great pet.` );
};
//Last sentence
console.log(`All these cats would make a great pet`);
