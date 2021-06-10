'use strict';

let guessScore = 0
// proof of life
console.log('hello');

alert('Welcome!')
let userName = prompt('What is your name?');
console.log('The users name is: ' + userName);
while (userName === null || userName === ''){
  userName = prompt('Sorry I didn\'t get that, please enter your name.');
}
let alertReturn = alert('Hey, thanks for visiting my page ' + userName + ' I hope you like it.');

let question1 = prompt('Yes or no. Have you ever been fishing?');
let lowercaseQuestion1 = question1.toLowerCase();
console.log(question1);

if (lowercaseQuestion1 === 'yes' || lowercaseQuestion1 === 'y') {
  alert('Awesome! You have lived a fulfilled life!');
  guessScore++
} else if (lowercaseQuestion1 === 'no' || lowercaseQuestion1 === 'n') {
  alert('Dang, Please reach out and find someone to take you.');
} else {
  alert('I am confused by the response');
}

let question2 = prompt('Yes or no. Do you believe in ghosts?');
let lowercaseQuestion2 = question2.toLowerCase();
console.log(question2);

if (lowercaseQuestion2 === 'yes' || lowercaseQuestion2 === 'y') {
  alert('No way! Only zombies are real');
} else if (lowercaseQuestion2 === 'no' || lowercaseQuestion2 === 'n') {
  alert('Good, theres nothing to worry about.');
  guessScore++
} else {
  alert('I am confused by the response');
}

let question3 = prompt('Yes or no. Do you believe in aliens?');
let lowercaseQuestion3 = question3.toLowerCase();
console.log(question3);

if (lowercaseQuestion3 === 'yes' || lowercaseQuestion3 === 'y') {
  alert('No way were the only ones, theyre watching us right now.');
  guessScore++
} else if (lowercaseQuestion3 === 'no' || lowercaseQuestion3 === 'n') {
  alert('How do you explain the pyramids?');
} else {
  alert('I am confused by the response');
}

let question4 = prompt('Yes or no. Do you believe in bigfoot?');
let lowercaseQuestion4 = question4.toLowerCase();
console.log(question4);

if (lowercaseQuestion4 === 'yes' || lowercaseQuestion4 === 'y') {
  alert('Show me some proof! No way.');
} else if (lowercaseQuestion4 === 'no' || lowercaseQuestion4 === 'n') {
  alert('Correct!');
  guessScore++
} else {
  alert('I am confused by the response');
}

let question5 = prompt('Yes or no. Do you know how to swim?');
let lowercaseQuestion5 = question5.toLowerCase();
console.log(question5);

if (lowercaseQuestion5 === 'yes' || lowercaseQuestion5 === 'y') {
  alert('Good! Its a good thing to know ' + userName);
  guessScore++
} else if (lowercaseQuestion5 === 'no' || lowercaseQuestion5 === 'n') {
  alert('Better go get some lessons ' + userName);
} else {
  alert('I am confused by the response ' + userName);
}

let correctAnswer = 45;
let userAttempts = 4;
for (let count = 0; count < 4; count++){
  let question6 = prompt('Lets play a game before you move on, guess a number between 1 and 70');
  while (question6 < 1 || question6 > 70)  {  
    // not within range question6 = prompt()
  // console.log(correctAnswer)
      question6 = prompt('Please follow instructions and guess a number between 1 and 70');
  }
      // console.log('this is the count', count)
    
    if (question6 == correctAnswer){
      alert('Correct Guess!');
      guessScore++
      break;
    } else if(question6 < correctAnswer){
      alert('To low!');
    } else if(question6 > correctAnswer){
      alert('To High!')
    } else {
      alert('You did something wrong.')
    }
    console.log(count);
    if (count == userAttempts - 1){
      alert('You could not guess the correct answer. The correct answer is: ' + correctAnswer);
    }
}
// Array 
let colorArray = ['red', 'blue', 'yellow', 'orange', 'green'];

// inner loop starts here

let guesscount = 6
let correct = false;

while (correct === false && guesscount > 0) {
  let usercolor= prompt('What is my favorite color?');
  let lowercaseUsercolor= usercolor.toLowerCase();
  for (let index=0; index < colorArray.length; index++) {
    if (lowercaseUsercolor === colorArray[index]) {
      alert('Nice job!');
      guessScore++
      correct = true;
      break;
    }
  }
  if (correct === false && guesscount > 1) {
    alert('Not correct');
  // if (correct === false && guesscount == 1) {
  //   alert('Not correct');
  }
  if (correct === false && guesscount == 1){
    alert('You could not guess the correct answer! Possible answer were, ' + colorArray + '. Thats okay, go on to my page.')
    correct = true;
  // if (guesscount == 1){
  //   alert('You could not guess the correct answer! Possible answer were, ' + colorArray + '. Thats okay, go on to my page.') THESE ARE MY NOTES on how i first had my code incase i needed to go back to my orignal input
  }
  guesscount = guesscount -1
  console.log('This is user attempt ' + (6 - guesscount) + ' and they guessed ' + usercolor)
  
}
alert("Great job. You have scored " + guessScore + " out of 7")