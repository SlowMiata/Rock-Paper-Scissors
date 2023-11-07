const result = document.querySelector('.result')
const robotResult = document.querySelector(".robot")
const playerResult = document.querySelector(".player")
const scoreDisplay = document.querySelector('.score')
const winner = document.querySelector('.winner')
const currentScore = document.querySelector('.currentScore')
const currentRound = document.querySelector('.round')
const playAgain = document.querySelector('.playAgain')

const rock = document.querySelector('.rock')
const paper =  document.querySelector('.paper')
const scissors =  document.querySelector('.scissors')

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

    playerResult.textContent = `You picked: ${PlayerChoice}`

    let robot = getComputerChoice()
    robotResult.textContent = `Robot picked: ${robot}`
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
    playAgain.style.visibility = 'hidden'

    let score = 0
    let gameCount = 1

    rock.addEventListener('click', () =>{  
        gameCount += 1 
        score += PlayRound('rock')
        currentScore.textContent =  `Score: ${score}`
        currentRound.textContent = `Round: ${gameCount}/5`
        checkGameCountAndDisplayScore()
        
    })
    paper.addEventListener('click', () =>{   
        gameCount += 1
        score += PlayRound('paper')
        currentScore.textContent  = `Score: ${score}`
        currentRound.textContent = `Round: ${gameCount}/5`
        checkGameCountAndDisplayScore()
        
    })
    scissors.addEventListener('click', () =>{   
        gameCount += 1
        score += PlayRound('scissors') 
        currentScore.textContent = `Score: ${score}`
        currentRound.textContent = `Round: ${gameCount}/5`
        checkGameCountAndDisplayScore()
        
    })

    function checkGameCountAndDisplayScore() {
        if (gameCount === 6) {
            rock.style.visibility = 'hidden'
            paper.style.visibility = 'hidden'
            scissors.style.visibility = 'hidden'
            playAgain.style.visibility = 'visible'
            scoreDisplay.textContent = `Game over! Your score is ${score}`;
            currentRound.textContent = `Round: 5/5`
            if (score <3 ){

                winner.textContent = "Robot Wins!"
            }
            else{
                winner.textContent = "Player Wins!"
            }

    
            playAgain.addEventListener('click', () =>{
            gameCount = 1
            score = 0
            currentScore.textContent = 'Score: 0'
            currentRound.textContent = `Round: 1/5`
            playAgain.style.visibility = 'hidden'
            rock.style.visibility = 'visible'
            paper.style.visibility = 'visible'
            scissors.style.visibility = 'visible'

        })

            

                
        
            
            
            
        }
    }

}

game()


