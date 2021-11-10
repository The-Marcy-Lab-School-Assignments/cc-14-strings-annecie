//write your code here

// Steps 
//declare a function
//set parameters
// declare a new variable called newString initialize to an empty string.
// create a for loop to checjk every character in a string.

function stripUpperCase(string){
  let stripped = '';
  for (let i = 0; i< string.length; i++){
      if (string[i] === string[i].toLowerCase())
      stripped += string[i];
  }
    return stripped
};

console.log(stripUpperCase("Hello"));