//I created 3 different variables with an array of 4 different outcomes
let favColour = ["red", "blue", "yellow", "green"];
let personality = [
  "You are independent",
  "You are kind",
  "You are courageous",
  "You are intelligent",
];
let hobbies = [
  "You like playing games",
  "You like to read",
  "You like to draw",
  "You like to listen to music",
];

//I declared a function that randomises the output of each varaible
function characteristics(sentence) {
  sentence = Math.floor(Math.random() * 4);
}

//I placed that function in new variables
let f = characteristics(favColour);
let p = characteristics(personality);
let h = characteristics(hobbies);

//And logged the variables into a sentence, then logged it to the console.
console.log(`Your favourite colour is ${f}. ${p}. ${h}.`);
