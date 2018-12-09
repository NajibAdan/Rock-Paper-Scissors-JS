let choices = ['Rock','Paper','Scissors']
let weakness_list = '{"weakness":["Paper","Scissors","Rock"]}';
let round = 0;
let p_score = 0;
let c_score = 0;
function computerPlay(){
    return Math.floor((Math.random() * 3));
}

function playRound(playerSelection, computerSelection ){
    let parse = JSON.parse(weakness_list);
    if (playerSelection==choices[computerSelection]){
        //return "Draw!";
        return 0;
    }
    else if (playerSelection!=parse.weakness[computerSelection]){
        //return "You lose. " + choices[computerSelection] + " beats "+ playerSelection;
        return -1;
    }
    else {
        //return "You win. " + playerSelection + " beats "+ choices[computerSelection];
        return 1;
    }
    
}

function game(playerSelection){
    round +=1;
    let computerSelection = computerPlay();
    return_val = playRound(playerSelection,computerSelection);
    let message = "<br> Round: " + round; 
    if (return_val==1){
        p_score += 1;
        message += ". You win. " + playerSelection + " beats "+ choices[computerSelection] + ".Your score: "+p_score+" and computer's score: "+c_score;
        document.getElementById('result').innerHTML += message;        
    }
    else if (return_val<0){
        c_score += 1;
        message +=". You lose. " + choices[computerSelection] + " beats "+ playerSelection + ".Your score: "+p_score+" and computer's score: "+c_score;
        document.getElementById('result').innerHTML += message;
        
    }
    else {
        message +=". Draw!" + ".Your score: "+p_score+" and computer's score: "+c_score;
        document.getElementById('result').innerHTML += message;
    }
    check();
}

function check(){
    if (round==5){
        document.getElementById('result').innerHTML += '<br>Game over. Final scores are '+p_score+" and computer's score: "+c_score;
        round =0;
        p_score = 0;
        c_score = 0;
    }
}