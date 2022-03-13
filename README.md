# Mixed Messages :speech_balloon:

This is the first project that I completed independently. Mixed Messages is a message generator program that is solely based on the programming language Javascript. 

### What does Mixed Messages do? :thought_balloon:
Mixed Messages generates a randomised message based on the users favourite colour, personality and their hobbies.

### Why did I create this project? :thought_balloon:
I created this project because I thought this would be entertaining, a user could generate different characteristics plus they are able to stop at any time. There are mo limits with this.

### Code
This is my code so far, you can view it clearly on my README.md. Any updates will be shown on here aswell.

#### My code:
```
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

function characteristics(sentence) {
  sentence = Math.floor(Math.random() * 4);
}

let f = characteristics(favColour);
let p = characteristics(personality);
let h = characteristics(hobbies);

console.log(`Your favourite colour is ${f}. ${p}. ${h}.`);
```
