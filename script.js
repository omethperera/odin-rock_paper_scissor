let humanScore = 0;
let computerScore = 0;
let round = 1;

function getComputerChoice(){
   let result = Math.floor(Math.random()*3)+1;
   switch (result){
    case 1:
        return 'ROCK';
    case 2:
        return 'PAPER';
    case 3:
        return 'SCISSOR';
   }

}

function getHumanChoice(){

    user_input = prompt("Type ROCK, PAPER or SCISSOR!")

    return user_input.toUpperCase()
}

function playRound(humanSelection, computerSelection) {
  switch(humanSelection){
    case 'ROCK':
        if(humanSelection == computerSelection){
            return 'Its a Tie!';
        }
        else{
            if(computerSelection == 'PAPER'){
                computerScore += 1;
                return 'YOU LOSE! Paper beats Rock';
            }
            else{
                humanScore += 1;
                return 'YOU WIN! Rock beats Scissor';
            }
        }

    case 'PAPER':
        if(humanSelection == computerSelection){
            return 'Its a Tie!';
        }
        else{
            if(computerSelection == 'ROCK'){
                humanScore += 1;
                return 'YOU WIN! Paper beats Rock';
            }
            else{
                computerScore += 1;
                return 'YOU LOSE! Scissor beats Paper';
            }
        }

    case 'SCISSOR':
        if(humanSelection == computerSelection){
            return 'Its a Tie!';
        }
        else{
            if(computerSelection == 'PAPER'){
                humanScore += 1;
                return 'YOU WIN! Scissor beats Paper';
            }
            else{
                computerScore += 1;
                return 'YOU LOSE! Rock beats Scissor';
            }
        }
  }
}

function playGame(){

    while (round<=5){
        let user_input = getHumanChoice();
        let computer_input = getComputerChoice();
        console.log(playRound(user_input,computer_input));
        round +=1
    }
    
}

console.log(playGame());



