function getMoveName(randomNumber) {
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

let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log('Wylosowana liczba to: ' + randomNumber);

let computerMove = getMoveName(randomNumber);

/*if(randomNumber == 1){
  computerMove = 'kamień';
} else if (randomNumber == 2){
  computerMove = 'papier';
} else if (randomNumber == 3){
  computerMove = 'nożyce';
}*/

printMessage('Mój ruch to: ' + computerMove);

let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

console.log('Gracz wpisał: ' + playerInput);

let playerMove = getMoveName(randomNumber);

/*if(playerInput == '1'){
  playerMove = 'kamień';
} else if (playerInput == '2'){
  playerMove = 'papier';
} else if (playerInput == '3'){
  playerMove = 'nożyce';
}*/

printMessage('Twój ruch to: ' + playerMove);

function displayResult(argComputerMove, argPlayerMove) {
  if ((argComputerMove == 'kamień' && argPlayerMove == 'nożyce' )
      (argComputerMove == 'papier' && argPlayerMove == 'kamień')
      (argComputerMove == 'nożyce' && argPlayerMove == 'papier')) {
      return 'Przegrałeś';
  }
  if ((argComputerMove == 'nożyce' && argPlayerMove == 'kamień' )
      (argComputerMove == 'kamień' && argPlayerMove == 'papier')
      (argComputerMove == 'papier' && argPlayerMove == 'nożyce')) {
      return 'Wygrałeś';
  }
  if ((argComputerMove == 'papier' && argPlayerMove == 'papier' )
      (argComputerMove == 'nożyce' && argPlayerMove == 'nożyce')
      (argComputerMove == 'kamień' && argPlayerMove == 'kamień')) {
      return 'Remis';
  }
  if ((argComputerMove == 'kamień' && argPlayerMove == 'nieznany ruch' )
      (argComputerMove == 'papier' && argPlayerMove == 'nieznany ruch')
      (argComputerMove == 'nożyce' && argPlayerMove == 'nieznany ruch')) {
      return 'Spróbuj jeszcze raz!';
  }
}
