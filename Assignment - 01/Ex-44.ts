//Making Sandwich
function Sandwich(...items : string[]): void{
    console.log("Items included in making sandwich: ")
    for( let i = 0 ; i<items.length ; i++){
        console.log( " - " + items[i]);

    }
    console.log("Sandwich has been served");
}

Sandwich("Mashed Potato");
Sandwich("Mayonaise", "Cheese", "Lettuce");
Sandwich("Pepparoni", "Beef Patty");