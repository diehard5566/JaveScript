const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
        return userInput;
      } else if (userInput === "bomb") {
        return userInput;
      }  else {
        console.log('Error!');
      }
  };
  
  const getComputerChoice = () => {
    const number =  Math.floor(Math.random() * 3);
    switch(number){
      case 0 :
        return "rock";
        break;
      case 1 :
        return "paper";
        break;
      case 2 :
        return "scissors";
        break;
    }
  };
  
  const determineWinner = (userChoice, computerChoice) =>{
    if (userChoice === computerChoice) {
      return "The game is a tie!";
    } 
  
    if (userChoice === "rock") {
      if (computerChoice === "paper") {
        return "computer won!";
      } else {
        return "player won!";
      }
    }
  
    if (userChoice === "paper") {
      if (computerChoice === "scissors") {
        return "computer won!";
      } else {
        return "player won!";
      }
    }
  
    if (userChoice === "scissors") {
      if (computerChoice === "rock") {
        return "computer won!";
      } else {
        return "player won!";
      }
    }
  
    if (userChoice === "bomb") {
      return "player won!";
    }
  };
  
  const playGame = () => {
    const userChoice = getUserChoice("rock");
    const computerChoice = getComputerChoice();
    console.log('You threw: ' + userChoice);
    console.log('The computer threw:' + computerChoice);
  
    console.log(determineWinner(userChoice, computerChoice));
  };
  
  playGame();