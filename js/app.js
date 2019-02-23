'use strict'

var userName = prompt('What is your Name?');
console.log('user name:', userName);
alert('Hi ' + userName + ' I\'m going to ask you few questions');
var noOfCorrectAns = 0; 

function promptYesOrNoQuestionAboutMe(question, rightAnswer, otherValidResponses) {

var yesOrNoText =  " Please enter yes/no ";
console.log('question:', question);
var getAnswer = prompt( question + yesOrNoText );
console.log('Answer for question:', question, " is ", getAnswer);
var returnMessage, rightAnswerFlag, validResponseFlag;

for(var i=0; i<rightAnswer.length; i++){
  if (getAnswer.toLowerCase() === rightAnswer[i].toLowerCase()) {
    rightAnswerFlag = true;
    returnMessage = "Great!!! Right answer.";
    noOfCorrectAns += 1;
    break;
  } 
}
if(!rightAnswerFlag) {
  for(var j=0; j<otherValidResponses.length; j++) {
    if (getAnswer.toLowerCase() === otherValidResponses[j].toLowerCase()) {
      validResponseFlag = true;
      returnMessage = "Incorrect answer.";
      break;
    } 
  }
}
if(!rightAnswerFlag && !validResponseFlag) {
  returnMessage = "Invalid input. Please enter Yes (YES/Y/y) or No (NO/N/n). "; 
}
console.log('returnMessage for Question', question, "is ", returnMessage);
return returnMessage;
}

var displayMessage; 
var yesAnswer = ["Y", "YES"];
var noAnswer = ["N", "NO"];

alert((promptYesOrNoQuestionAboutMe("Do you think i am over 18 years old?", yesAnswer, noAnswer)));
alert((promptYesOrNoQuestionAboutMe("Am i a US Citizen?", noAnswer, yesAnswer)));
alert((promptYesOrNoQuestionAboutMe("Do i have a Graduate degree?", yesAnswer, noAnswer)));
alert((promptYesOrNoQuestionAboutMe("Do i have a Job Now?", yesAnswer, noAnswer)));
alert((promptYesOrNoQuestionAboutMe("Am i looking for a new Job", noAnswer, yesAnswer)));

function guessFavNumber(myActualFavNumber){
  var noOfTries = 4;
  for (var i=0; i < noOfTries; i++) {
    console.log('Fav Number Attempt', i+1);
    var myFavNumber = parseInt(prompt('What is my favourite number? Please enter a number'));
    console.log('Fav Number Ans', myFavNumber);
    if(myFavNumber === myActualFavNumber){
      alert('You got it');
      console.log('You got my fav number');
      noOfCorrectAns += 1;
      break;
    } else {
      if(isNaN(myFavNumber)){
        alert('You have not entered a number.')
      } else if(myFavNumber < myActualFavNumber){
        alert('Too Low');
      } else if(myFavNumber > myActualFavNumber){
        alert('Too High');
      }  
      if(i === noOfTries - 1)
        alert('Wrong! May be next time');
      else
        alert('You can try again');
    }
  }
}
guessFavNumber(6);


function guessFavPlace(myFavPlaces, noOfTriesForFavPlace) {

  var foundFavPlace = false;
  for (var i=0; i < noOfTriesForFavPlace; i++) {
    console.log('Fav Place Attempt', i+1);
    var myFavPlace = prompt('What is my favourite Place?');
    console.log('Fav Place Ans', myFavPlace);
  
    for(var j = 0; j < myFavPlaces.length; j++) {
      if(myFavPlace.toLowerCase() === myFavPlaces[j].toLowerCase()) {
        alert('You got it');
        console.log('You got my fav Place');
        noOfCorrectAns += 1;
        foundFavPlace = true;
        break;
      } 
    }
    if(foundFavPlace)
      break;
  
    if(i === noOfTriesForFavPlace - 1)
      alert('Wrong! May be next time');
    else
      alert('You can try again');  
  }
}

var myFavoritePlaces = ['india','seattle','hyderabad','bellevue', 'california'];
guessFavPlace(myFavoritePlaces, 6);

console.log('noOfCorrectAns::', noOfCorrectAns);
alert('You got '+ noOfCorrectAns + ' out of 7 Questions. '+userName+'! Better luck next time!');
