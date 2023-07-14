let magician3: string[] = ['Mark', 'Alice', 'John'];

function show_magicians3(magician3: string[]) {
  for (let i = 0; i < magician3.length; i++) {
    console.log(magician3[i]);
  }
}

// The Great Magician
function make_great2(magician3: string[]): string[] {
  let greatMagician: string[] = [];
  for (let i = 0; i < magician3.length; i++) {
    greatMagician.push("The Great " + magician3[i]);
  }
  return greatMagician;
}

let unchanged_Magicians = magician3.slice(); //To Create a copy of the original array
let greatMagi = make_great2(unchanged_Magicians);

show_magicians3(unchanged_Magicians);
show_magicians3(greatMagi);
