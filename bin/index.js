#!/usr/bin/env node
const yargs = require('yargs/yargs')
const { hideBin } = require('yargs/helpers')
const argv = yargs(hideBin(process.argv)).argv


class Move{
    constructor(play){  //The move that was played
        if(play.toLowerCase() === "paper"){
            this._play = "paper"
            this._number = 3
        } else if (play.toLowerCase() === "scissors"){
            this._play = "scissors"
            this._number = 2
        } else if (play.toLowerCase() === "rock"){
            this._play = "rock"
            this._number = 1
        } else{
            throw new Error(`Move: ${play} is not a valid move in this Roshambo.`)
            console.log(`Move: ${play} is not a valid move in this Roshambo.`)
        }
    }
     get play(){
        return this._play;
    }
     get playNum(){
        return this._number;
    }
}

class PlayAgainstComputer{
    constructor(player){
        this._playerMove = player;
        let computerPlay = Math.floor(Math.random() * 3) + 1 
        if(computerPlay === 3){
            this._computerMove = new Move("paper");
        } else if (computerPlay === 2){
            this._computerMove = new Move("scissors");
        } else  
            this._computerMove = new Move("rock");
    }
    evalPlays(){
        console.log(`Player played: ${this._playerMove.play}, Computer played: ${this._computerMove.play}`)
        if(this._playerMove.playNum === this._computerMove.playNum){
            console.log("The game is a draw!")
            return 0
        }
        if((this._playerMove.playNum === 3) && (this._computerMove.playNum === 2)){
            console.log("Computer Wins!")
            return -1
        } else if ((this._playerMove.playNum === 2) && (this._computerMove.playNum === 1)){
            console.log("Computer Wins!")
            return -1
        } else if ((this._playerMove.playNum === 1) && (this._computerMove.playNum === 3)){ 
            console.log("Computer Wins!")
            return -1
        } else{
            console.log("Player Wins!")
            return 1
        }
    }
}



//Verify Command Line Arguments
// if(process.argv.length < 3){
//     console.log("Must play a move (rock, paper, or scissors)")
//     return -1;
// } else{
//    player = new Move(process.argv[2])
//    game = new PlayAgainstComputer(player)
//    game.evalPlays()
// }

if(argv.move === undefined){
    console.log("Show your moves! You need to play a move")
    return -1;
} else{
   player = new Move(argv.move)
   game = new PlayAgainstComputer(player)
   game.evalPlays()
}



