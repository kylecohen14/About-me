'use strict';

// proof of life
console.log('hello');

let userName = prompt('What is your name?');
console.log('The users name is: ' + userName);
let alertReturn = alert('Hey, thanks for visiting my page ' + userName + ' I hope you like it.');

let question1 = prompt('Yes or no. Have you ever been fishing?');
let lowercaseQuestion1 = question1.toLowerCase();
console.log(question1);

if (lowercaseQuestion1 === 'yes' || lowercaseQuestion1 === 'y') {
  alert('Awesome! You have lived a fulfilled life!');
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
} else {
  alert('I am confused by the response');
}

let question3 = prompt('Yes or no. Do you believe in aliens?');
let lowercaseQuestion3 = question3.toLowerCase();
console.log(question3);

if (lowercaseQuestion3 === 'yes' || lowercaseQuestion3 === 'y') {
  alert('No way were the only ones, theyre watching us right now.');
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
} else {
  alert('I am confused by the response');
}

let question5 = prompt('Yes or no. Do you know how to swim?');
let lowercaseQuestion5 = question5.toLowerCase();
console.log(question5);

if (lowercaseQuestion5 === 'yes' || lowercaseQuestion5 === 'y') {
  alert('Good! Its a good thing to know ' + userName);
} else if (lowercaseQuestion5 === 'no' || lowercaseQuestion5 === 'n') {
  alert('Better go get some lessons ' + userName);
} else {
  alert('I am confused by the response ' + userName);
}