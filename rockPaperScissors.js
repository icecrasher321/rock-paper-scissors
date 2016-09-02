var userChoice = prompt("Select Rock, Paper or Scissors")

var compChoice = function(rand) {
    if (rand >= 0.33 && rand <= 0.66){
        return "Paper";
    } else if (rand < 0.33) {
        return "Scissors";
    } else {
        return "Rock";
    }
};

compChoice = compChoice(Math.random())
var compWin = "The Computer Wins :(";
var userWin = "You WIN!";

var print = function(string) {
    console.log(string);
};

var compareHelp = function(c1, s1, c2, s2) {
    if (c1 == s1 && c2 == s2) {
        print(compWin); 
    } else if (c1 == s2 && c2 == s1) {
        print(userWin);
    }
        else if (c1 == c2) {
            print("DRAW!")
    }
    else {
        print(userWin);
}
};

var compare = function() {
    if (userChoice == "Scissors") {
   compareHelp(compChoice, "Rock", userChoice, "Scissors");
    } else if (userChoice == "Paper") {
        compareHelp(compChoice, "Scissors", userChoice, "Paper");
    }
      else if (userChoice == "Rock") {
        compareHelp(compChoice, "Paper",    userChoice, "Rock");
      }
    };
    
  console.log("Computer: " + compChoice);
  console.log("You: " + userChoice);
  compare()
