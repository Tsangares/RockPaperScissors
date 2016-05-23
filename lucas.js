//These are the options to choose;
//const rock      = 0;
//const paper     = 1;
//const sciscors  = 2;

function getMoveLucas(moveHistory, i){
    //moveHistory is an array of all the past games.
    //i is the last iteration. It starts at -1.
    //To get the previous game do moveHistory[i]
    //make sure not to use it for this fist round because i = -1 for the first round.
    if(i != -1){
        var previousRound = moveHistory[i];
        var willsMove = previousRound['will']; //Returns ills move
        var lucassMove = previousRound['lucas']; //Returns lucass move
        var winner = previousRound['winnes']; //Returns winner of last round.
    }
    
    //return a number betwees 0-2 that is your move for rock paper scissors.
    return Math.floor(Math.random()*3);
}