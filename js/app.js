'use strict';

let userName = prompt("What is your name?");
alert(`Welcome ${userName}.`);
//-------------------------------------------------------------------
const myName = "Tom";
const myAge = "36";
const favMovie = "Star Wars";
const myHome = "Spokane";
const myTravel = "Canada";
const yearBorn = '1985';
let score = 0;
//-------------------------------------------------------- Question 1: Name
let q1 = prompt(`Is ${myName} my name?`);
q1 = q1.toLowerCase();
if(q1 == `yes` || q1 == `y`){
    alert(`Well done ${userName}, you guessed correctly that my name is ${myName}.`);
    score++;
} else if(q1 == `no` || q1 == `n`){
    alert(`FALSE. ${userName}, that is incorrect.`);
} else if(q1 == '' || q1 == null){
    alert(`${userName}, I guess you'd rather not answer...`);
}
// console.log(q1);
//-----------------------------------------------------------Question 2: Age 
let q2 = prompt(`Is ${myName} 45 years old?`);
q2 = q2.toLowerCase();
if(q2 == `yes` || q2 == `y`){
    alert(`${userName}, that's way off. ${myName} is actually ${myAge}.`);
} else if(q2 == `no` || q2 == `n`) {
    alert(`Correct ${userName}, ${myName} is actually ${myAge} years old.`);
    score++;
} else if(q2 == '' || q2 == null){
    alert(`${userName}, I guess you'd rather not answer...`);
}
//console.log(q2);
//------------------------------------------------------------- Question 3: Favorite Movie 
let q3 = prompt(`Is ${myName}'s favorite film Titanic?`);
q3 = q3.toLowerCase();
if(q3 == `yes` || q3 == `y`) {
    alert(`FALSE! ${myName}'s favorite film is ${favMovie}.`);
} else if(q3 == `no` || q3 == `n`){
    alert(`CORRECT. ${myName}'s favorite movie is ${favMovie}.`);
    score++;
} else if(q3 == "" || q3 == null){
    alert(`Ok ${userName}, I guess you'd rather not answer...`);
}
// console.log(q3);
// --------------------------------------------------------------Question 4: Home 
let q4 = prompt(`Does ${myName} live in Bellingham, WA?`);
q4 = q4.toLowerCase();
if(q4 == `yes` || q4 == `y`){
    alert(`FALSE. ${myName} lives in Spokane, WA.`);
} else if(q4 == `no` || q4 == `n`){
    alert(`CORRECT. ${myName} actually lives in Spokane, WA.`);
    score++;
}else if(q4 == "" || q4 == null){
    alert(`Ok ${userName}, I guess you'd rather not answer...`);
}
// console.log(q4);
// --------------------------------------------------------------- Question 5: Foreign Living
let q5 = prompt(`Did ${myName} ever live in Canada?`);
q5 = q5.toLowerCase();
if(q5 == `yes` || q5 == 'y'){
    alert(`Good guess ${userName}. ${myName} lived in Victoria, BC for several years.`);
    score++;
} else if(q5 == `no` || q5 == `n`){
    alert(`FALSE. ${myName} did live in ${myTravel} for a few years.`);
}else if(q5 == "" || q5 == null){
    alert(`Ok ${userName}, I guess you'd rather not answer...`);
}
// console.log(q5);
// ----------------------------------------------------------------- Question 6: Year Born-for loop

for (let i = 0; i < 3; i++){
    let q6 = prompt('What year was I born?');
    q6 = q6.toLowerCase();
    if (q6 == yearBorn) {
        alert(`Correct ${userName}.`);
        score++;
        break;
    } else if (q6 > yearBorn) {
        alert(`Too high. Think prior to the 90's.`);
    } else if (q6 < yearBorn) {
        alert(`Too low. Think upwards of the 1970's.`);
    }
}
alert(`${myName} was born in ${yearBorn}.`);
//console.log(q6);
//--------------------------------------------------------------------Question 7: Array answers
let q7Answers = ['hockey', 'basketball', 'soccer', 'skateboarding'];

for(let i = 0; i < 5; i++) {
    let q7 = prompt(`What is one of ${myName}'s favorite sports?`);
    q7 = q7.toLowerCase();
    if (q7 == q7Answers[0] || q7 == q7Answers[1] || q7 == q7Answers[3] || q7 == q7Answers[4]) {
        alert(`Congratulations, ${userName}, ${q7Answers[i]} is one of ${myName}'s favorite sports.`);
        score++;
        break;
    } else {
        alert (`False.`);
    }
}
alert(`${myName} prefers ${q7Answers[0]}, ${q7Answers[1]}, ${q7Answers[2]}, and ${q7Answers[3]}`);
//------------------------------------------------------------------------
alert(`${userName}, you have answered ${score} questions correctly.`);
// document.write(`${userName}, here are the answers. My name is ${myName}, my age is ${myAge}, my favorite film is ${favMovie}, I live in ${myHome}, and I used to live in ${myTravel}.`);
document.write(`Ok ${userName}, let's compile your score.`);
document.write(`You answered ${score} out of 7 questions correctly.`);
