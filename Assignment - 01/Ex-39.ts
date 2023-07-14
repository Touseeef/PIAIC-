//City Country Formatting 
function city_country( city : string, country : string ){
    return `${city}, ${country}`;
};

//Calling Function
let loc1 : string = city_country("Lahore","Pakistan");
let loc2 : string = city_country("Phatoki","Pakistan");
let loc3 : string = city_country("New York","America");

console.log(loc1);
console.log(loc2);
console.log(loc3);