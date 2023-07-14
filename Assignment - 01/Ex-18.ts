//Seeing the World
    let placesToVisit: string[] = ["Mount Fuji", "Times Square", "Europe", "Dubai", "Japan"];

//Original List
    console.log("Original List: ")
    console.log(placesToVisit);

//Alphabetically Ordered List
    console.log("\nAlphabetically Ordered List without modifying the Original List");
    console.log([...placesToVisit].sort());

//List is still in its original order
    console.log("\List is still in it's original order:");
    console.log(placesToVisit);

//Reverse Alphabetically Ordered List
    console.log("\nReversed Alphabetically Ordered List without modifying the Original List");
    console.log([...placesToVisit].sort().reverse());

//List is Still in Original Order
    console.log("Still in it's original order");
    console.log(placesToVisit);

//Reverse Order of the list
    console.log("Reversed Order of List: ")
    console.log(placesToVisit.reverse());

//Again Reverse Order of the list to obtain the Original Order
    console.log("Again Reversed Order of List to Get ORIGINAL Order: ")
    console.log(placesToVisit.reverse());

//Alphabetical order of the list has been changed
    placesToVisit.sort()

//Printing
    console.log("Alphabetical order of the list has been changed: ")
    console.log(placesToVisit);

//Reverse Alphabetical order of the list has been changed
    placesToVisit.sort().reverse()

//Printing
    console.log("Reverse Alphabetical order of the list has been changed: ")
    console.log(placesToVisit);
