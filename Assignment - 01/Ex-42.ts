let magician2: string[] = ['Mark', 'Alice', 'John'];

function show_magicians2(magician: string[]) {
  for (let i = 0; i < magician.length; i++) {
    console.log(magician[i]);
  }
}

// The Great Magician
function make_great(magician2: string[]): string[] {
  let greatMagician: string[] = [];
  for (let i = 0; i < magician2.length; i++) {
    greatMagician.push("The Great " + magician2[i]);
  }
  return greatMagician;
}

show_magicians2(magician2);
let greatMagicians = make_great(magician2);
console.log(greatMagicians);
