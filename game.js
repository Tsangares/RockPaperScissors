//This is a game of ro sham bo or rock paper scirors
var score = document.querySelector("#score");
var gameHistory = document.querySelector("#history");

//These are the options to choose;
const rock      = 0;
const paper     = 1;
const sciscors  = 2;    

const draw      = 0;
const willNum   = 1;
const lucasNum  = 2;

//Game variables
const iterations    = 1000;
var totalLucasWins  = 0;
var totalWillWins   = 0;

var moveHistory     = new Array();

//This is the game loop
for(var i = 0; i < iterations; ++i){
    var will = getMoveWill(moveHistory, i-1);
    var lucas = getMoveLucas(moveHistory, i-1);
    var winner = getWinner(lucas, will);
    moveHistory[i] = {"will":will, "lucas":lucas, "winner":winner};
    //Output the game.
    var game = document.createElement('p');
    game.textContent = "Game: " + i.toString() + " Lucas: " + getMove(lucas) + " Will: " + getMove(will) + " winnner: " + getPlayer(winner);
    gameHistory.appendChild(game);
}

//Display ultimate score
var scoreDisplay = document.createElement("h2");
scoreDisplay.textContent = "Lucas wins: " + totalLucasWins.toString() + " Will wins: " + totalWillWins.toString() + " Total Games: " + iterations + " Draws: " + (iterations-(totalLucasWins+totalLucasWins)).toString();
score.appendChild(scoreDisplay);

//Calculate winner
function getWinner(lucasMove, willMove){
    if(lucas == will){
        return draw;
    }else if((lucas==0&&will==2) || (lucas==1&&will==0) || (lucas==2&&will==1)){
        totalLucasWins++;
        return lucasNum;
    }else{
        totalWillWins++;
        return willNum;
    }
}

//get string of the player move
function getMove(input){
    switch(input){
            case(rock):
            return "rock";
            case(paper):
            return "paper";
            case(sciscors):
            return "sciscors";
    }
}

//get string of who won.
function getPlayer(input){
    switch(input){
            case(draw):
            return "draw";
            case(willNum):
            return "will";
            case(lucasNum):
            return "lucas";
    }
}