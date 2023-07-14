//Make Shirts
function make_shirts(size : string = "Large" , text: string = "I Love TypeScript" ) {
    console.log(`The shirt size is ${size} and it says: "${text}".`);
  }
  
  // Calling the function
  make_shirts();    //Large with default Message
  make_shirts("Medium");    //Medium with default Message
  make_shirts("Small", "Hey there!");   //Custom with custom Message
  