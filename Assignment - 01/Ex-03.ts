let Name = "MuhammAd abDullah ";
console.log (Name.toLowerCase());
//
console.log (Name.toUpperCase());
//
console.log(toTitleCase(Name));
function toTitleCase(text: string): string {
    let words: string[] = text.toLocaleLowerCase().split(' ');
    let titleCaseWords: string[] = [];
    for (let word of words){
        let capitalWords: string = word.charAt(0).toUpperCase() + word.slice(1);
        titleCaseWords.push(capitalWords);
    }
    return titleCaseWords.join(" ");
};