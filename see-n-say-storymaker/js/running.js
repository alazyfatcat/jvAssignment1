// Assignment 1 | COMP1073 Client-Side JavaScript

/* Variables
-------------------------------------------------- */
// Create a new speechSynthesis object
var synth = window.speechSynthesis;
// Learn more about SpeechSynthesis.speak() at https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis/speak

var speakButton = document.querySelector('.noun');
var speakButton1 = document.querySelector('.verb');
var speakButton2 = document.querySelector('.adj');
var speakButton3 = document.querySelector('.noun2');
var speakButton4 = document.querySelector('.place');
var speakButton5 = document.querySelector('.all');

let insertX = ['The turkey', 'mom', 'dad', 'the dog', 'my teacher', 'the elephant', 'the cat'];
let	insertY = ['sat on', 'ate', 'danced with', 'saw', "doesn't like", 'kissed'];
let	insertZ = ['a funny', 'a scary', 'a goofy', 'a slimy', "a barking", 'a fat'];
let	insertA = ['goat', 'monkey', 'fish', 'cow', "frog", 'bug', 'worm'];
let	insertB = ['on the moon', 'on the chair', 'in my spaghetti', 'in my soup', "on the grass", 'in my shoes'];



function randomValueFromArray(array){
	var index = Math.floor(Math.random()*array.length)
	return array[index];
}




/* Functions
-------------------------------------------------- */
function speakNow(string) {
	console.log(string);
	// Create a new speech object, attaching the string of text to speak
	var utterThis = new SpeechSynthesisUtterance(string);
	// Actually speak the text
	synth.speak(utterThis);
}

/* Event Listeners
-------------------------------------------------- */
// Onclick handler for the button that speaks the text contained in the above var textToSpeak
speakButton.addEventListener('click', function() {
	var x = randomValueFromArray(insertX);
	speakNow(x);
})

speakButton1.addEventListener('click', function() {
	var y = randomValueFromArray(insertY);
	speakNow(y);
})

speakButton2.addEventListener('click', function() {
	var z = randomValueFromArray(insertZ);
	speakNow(z);
})

speakButton3.addEventListener('click', function() {
	var a = randomValueFromArray(insertA);
	speakNow(a);
})

speakButton4.addEventListener('click', function() {
	var b = randomValueFromArray(insertB);
	speakNow(b);
})

var x = randomValueFromArray(insertX);
var y = randomValueFromArray(insertY);
var z = randomValueFromArray(insertZ);
var a = randomValueFromArray(insertA);
var b = randomValueFromArray(insertB);

speakButton5.addEventListener('click', function() {
 var all = (randomValueFromArray(insertX)+ randomValueFromArray(insertY) + randomValueFromArray(insertZ) 
       + randomValueFromArray(insertA) + randomValueFromArray(insertB));
       speakNow(all);
}) 