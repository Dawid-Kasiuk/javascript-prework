{
const playGame = function(playerInput){
  clearMessages();

  const getMoveName = function(randomNumber) {
    if (randomNumber == 1) {
      return 'kamień';
    }
    if (randomNumber == 2) {
      return 'papier';
    }
    if (randomNumber == 3) {
      return 'nożyce';
    }
  }

  const randomNumber = Math.floor(Math.random() * 3 + 1);

  console.log('Wylosowana liczba to: ' + randomNumber);

  const computerMove = getMoveName(randomNumber);

  /*if(randomNumber == 1){
    computerMove = 'kamień';
  } else if (randomNumber == 2){
    computerMove = 'papier';
  } else if (randomNumber == 3){
    computerMove = 'nożyce';
  }*/

  printMessage('Mój ruch to: ' + computerMove);

  /*let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');*/

  console.log('Gracz wpisał: ' + playerInput);

  const playerMove = getMoveName(playerInput);

  /*if(playerInput == '1'){
    playerMove = 'kamień';
  } else if (playerInput == '2'){
    playerMove = 'papier';
  } else if (playerInput == '3'){
    playerMove = 'nożyce';
  }*/

  printMessage('Twój ruch to: ' + playerMove);

   const displayResult = function(argComputerMove, argPlayerMove) {
    if( argComputerMove == 'kamień' && argPlayerMove == 'nożyce'){
    printMessage('Przegrałeś!');
  } else if ( argComputerMove == 'papier' && argPlayerMove == 'kamień'){
    printMessage('Przegrałeś!');
  } else if ( argComputerMove == 'nożyce' && argPlayerMove == 'papier'){
    printMessage('Przegrałeś!');
  } else if ( argComputerMove == 'nożyce' && argPlayerMove == 'kamień'){
    printMessage('Wygrałeś!');
  } else if ( argComputerMove == 'kamień' && argPlayerMove == 'papier'){
    printMessage('Wygrałeś!');
  } else if ( argComputerMove == 'papier' && argPlayerMove == 'nożyce'){
    printMessage('Wygrałeś!');
  } else if ( argComputerMove == 'papier' && argPlayerMove == 'papier'){
    printMessage('Remis!');
  } else if ( argComputerMove == 'nożyce' && argPlayerMove == 'nożyce'){
    printMessage('Remis!');
  } else if ( argComputerMove == 'kamień' && argPlayerMove == 'kamień'){
    printMessage('Remis!');
  } else if ( argComputerMove == 'kamień' && argPlayerMove == 'nieznany ruch'){
    printMessage('Spróbuj jeszcze raz!');
  } else if ( argComputerMove == 'papier' && argPlayerMove == 'nieznany ruch'){
    printMessage('Spróbuj jeszcze raz!');
  } else if ( argComputerMove == 'nożyce' && argPlayerMove == 'nieznany ruch'){
    printMessage('Spróbuj jeszcze raz!');
    }
  }
  displayResult(computerMove, playerMove);
}

document.getElementById('play-rock').addEventListener('click', function(){
  playGame(1);
});

document.getElementById('play-paper').addEventListener('click', function(){
  playGame(2);
});

document.getElementById('play-scissors').addEventListener('click', function(){
  playGame(3);
});
}
