const choices = document.querySelectorAll('.choice'),
      score = document.querySelector('#score'),
      restart = document.querySelector('#restart'),
      modal = document.querySelector('.modal'),
      result = document.querySelector('#result'),
      scoreBoard = {
        player: 0,
        computer: 0,
        draw: 0
      };

//!__________________play

function play(event){
    restart.style.display = 'inline-block'
    
    const playerChoice = event.target.id
    const computerChoice = getComputerChoice();
    const winner = getwinner(playerChoice,computerChoice);
    showWinner(winner, computerChoice)
}

//!_________________GET COMPUTER  CHOICE

function getComputerChoice() {
    const rand = Math.random()

    if (rand < 0.35) {
      return 'rock'
    }else if(rand <= 0.70) {
      return 'scissors'
    }else {
      return 'paper'
    }
}

//!__________________GET WINNER

function getwinner(p, c) {
  if (p === c) {
    return 'equal'
  } else if (p === 'rock') {
    if (c === 'paper') {
      return 'computer'
    } else {
      return 'player'
    }
  }else if (p === 'paper') {
    if (c === 'scissors') {
      return 'computer'
    } else {
      return 'player'
    }
  }else if (p === 'scissors') {
    if (c === 'paper') {
      return 'player'
    } else {
      return 'computer'
    }
  }
}

//!_____________________SHOW WINNER 

function showWinner(winner, computerChoice, draw) {
  if (winner === 'player') {
    scoreBoard.player++
    result.innerHTML = `
      <h1 class="text-win">you won</h1>
      <i class="fas fa-hand-${computerChoice} fa-10x"></i>
      <p>Computer chose <strong>
      ${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)}</strong></p>
    `
  }else if (winner === 'computer') {
    scoreBoard.computer++
    result.innerHTML = `
      <h1 class="text-lose">you lose</h1>
      <i class="fas fa-hand-${computerChoice} fa-10x"></i>
      <p>Computer chose <strong>
      ${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)}</strong></p> `
  }else if (draw = true) {
    scoreBoard.draw++
    result.innerHTML = `
      <h1 style="color:#ff7300;">draw</h1>
      <i class="fas fa-hand-${computerChoice} fa-10x"></i>
      <p>Computer chose <strong>
      ${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)}</strong></p> `
  }

  score.innerHTML = `
    <p>Player: ${scoreBoard.player}</p>
    <p>Draw: ${scoreBoard.draw}</p>
    <p>Computer: ${scoreBoard.computer}</p>
  `

  modal.style.display = 'block'
}

//!___________________RESTART GAME

function restartGame() {
  alert("game will restart")
  scoreBoard.player = 0
  scoreBoard.draw = 0
  scoreBoard.computer = 0

  score.innerHTML = `
    <p>Player: ${scoreBoard.player}</p>
    <p>Draw: ${scoreBoard.draw}</p>
    <p>Computer: ${scoreBoard.computer}</p>
  `
}

//!______________________CLEAR MODAL

function clearModal(event) {
  if (event.target == modal) {
    modal.style.display = 'none'
  }
}

//!________________________

choices.forEach(choise => choise.addEventListener('click', play));

window.addEventListener('click', clearModal);

restart.addEventListener('click', restartGame)