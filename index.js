const result = document.querySelector('.result')
const robotResult = document.querySelector(".robot")
const playerResult = document.querySelector(".player")
const scoreDisplay = document.querySelector('.score')
const winner = document.querySelector('.winner')
const currentScore = document.querySelector('.currentScore')

function getComputerChoice(){
    //gets the choice of the robot at random
    let choice = ""
    switch(Math.floor(Math.random() * 3) + 1){
        case 1:
            choice = "rock"
            break
        case 2:
            choice = "paper"
            break
        case 3:
            choice = "scissors"
            break;
    }

    return choice

}

//play a single round
function PlayRound(PlayerChoice){
    scoreDisplay.textContent = ''
    winner.textContent = ''

    playerResult.textContent = PlayerChoice

    let robot = getComputerChoice()
    robotResult.textContent = robot
    switch(PlayerChoice){
        case "rock":
            if(robot == "rock"){
                result.textContent = "tie"
                return 0
            }
            else if (robot == "paper"){
                result.textContent = "you lose :C"
                return 0
            }
            else if (robot == "scissors"){
                result.textContent = "you win C:"
                return 1
            }
            break
        
        case "paper":
            if(robot == "paper"){
                result.textContent = "tie"
                return 0
            }
            else if (robot == "scissors"){
                result.textContent = "you lose :C"
                return 0
            }
            else if (robot == "rock"){
                result.textContent = "you win C:"
                return 1
            }
            break

        case "scissors":
            if(robot == "scissors"){
                result.textContent = "tie"
                return 0
            }
            else if (robot == "rock"){
                result.textContent = "you lose :C"
                return 0
            }
            else if (robot == "paper"){
                result.textContent = "you win C:"
                return 1
            }
            break

        default:
            result.textContent = "invalid choice"
            console.log(PlayerChoice)
            return 0
        
    }
}
    

function game(){

    let score = 0
    let gameCount = 0

    document.querySelector('.rock').addEventListener('click', () =>{  
        gameCount += 1 
        score += PlayRound('rock')
        currentScore.textContent = score
        checkGameCountAndDisplayScore()
    })
    document.querySelector('.paper').addEventListener('click', () =>{   
        gameCount += 1
        score += PlayRound('paper')
        currentScore.textContent = score
        checkGameCountAndDisplayScore()
    })
    document.querySelector('.scissors').addEventListener('click', () =>{   
        gameCount += 1
        score += PlayRound('scissors') 
        currentScore.textContent = score
        checkGameCountAndDisplayScore()
    })

    

    function checkGameCountAndDisplayScore() {
        if (gameCount === 5) {
            scoreDisplay.textContent = `Game over! Your score is ${score}`;
                if (score <3 ){

                    winner.textContent = "Robot Wins!"
                }
                else{
                    winner.textContent = "Player Wins!"
                }
            gameCount = 0
            score = 0
            currentScore.textContent = score
            
        }
    }

}


game()


