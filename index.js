var chalk = require('chalk')
var readlineSync = require("readline-sync");
var score = 0;

console.log(chalk.black.bgBlue("Hi!! User.. Welcome to the Quiz!!"));
console.log(chalk.green.bold("\nKnow How much Financially Literate are You?? \n"));
var userName = readlineSync.question("Kindly enter your name: ");

console.log(chalk.yellow("\nRules & Instructions:\n"));
console.log(chalk.yellow("> There are 7 basic questions regarding Financial Literacy and all are compulsory."));
console.log(chalk.yellow("> For every right answer you will get 3 points and for each wrong answer 1 point will be deducted."));
console.log(chalk.yellow("> Just type the serial number of the option to answer."))

console.log(chalk.bgCyan.black("\nHey " + userName + " here we go!!"));

var highScores = [
{
name : "Sri Harsha",
score: "7"
},
{
name : "Akash",
score: "5"
}

]

function quiz(listOfAnswers,question,answer){
  var userAnswer = readlineSync.keyInSelect(listOfAnswers,question);
  if(listOfAnswers[userAnswer] === answer){
    console.log("you were right ;)");
    score = score + 3;
  }else{
    console.log("you were wrong");
    score = score - 1;
    console.log("The correct answer is: "+ answer);
  }if(score<0){
    score = 0;
  }
  console.log("Your current score is: " + score);
  console.log("------------------------------------------------------")
}

var quesList = [
  {
    options:['Know your customer','Know your character','Both of above','None of above'],
    question:chalk.red("A.KYC means"),
    answer: "Know your customer"
  },
  {
    options:['RadhaKrishna Damani','Rakesh Jhunjunwala','Raamdeo Agarwal','Dolly Khanna'],
    question:chalk.red("B.Who is known as Warren Buffet of India? "),
    answer: "Rakesh Jhunjunwala"
  },
  {
    options:['Cannot Predict','False','True','Do not know'],
    question:chalk.red("C.In general, investments that are riskier tend to provide higher returns over time than investments with less risk."),
    answer: "True"
  },
  {
    options:['Budgeting','Saving','Planning','Liquidity'],
    question:chalk.red("D.The ability to convert financial resources into usable cash with ease is referred to as ??"),
    answer: "Liquidity"

  },
  {
    options:['Loans','Deposits','Both (1) & (2)','None of above'],
    question:chalk.red("E.Banks pays interest on"),
    answer: "Deposits"

  },
  {
    options:['annual interest rate.','time period.','number of months in a year.','annual interest rate and the time period.'],
    question:chalk.red("F.The amount of interest is determined by multiplying the amount in savings by the:"),
    answer: "annual interest rate and the time period."

  },
  {
    options:['Cash withdrawal','Account enquiry','Statement of account','All of above'],
    question:chalk.red("G.ATM can be used for"),
    answer: "All of above"

  },
]

for(i=0;i<quesList.length;i++){
var currentques = quesList[i];
quiz(currentques.options,currentques.question,currentques.answer)
}

console.log(chalk.green("\nYAY!!" + userName + " you have successfully completed the quiz"));
console.log(chalk.bgMagenta.black("\nYour final score is:  "+ score));

console.log("----------------------")
console.log("Current HighScores Are ")
for(var i=0 ; i<highScores.length ; i++){
  var currentHighScore = highScores[i];
 console.log(currentHighScore.name + ":" + currentHighScore.score)
}

console.log("----------------------")
console.log("If you scored more than the current highscores, kindly inform me .")
