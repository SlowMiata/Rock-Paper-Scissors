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

const result = document.querySelector('.result')
const robotResult = document.querySelector(".robot")
const playerResult = document.querySelector(".player")

//play a single round
function PlayRound(PlayerChoice){

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


const rock = document.querySelector('.rock').addEventListener('click', () =>{   
    PlayRound('rock') 
})
const paper = document.querySelector('.paper').addEventListener('click', () =>{   
    PlayRound('paper') 
})
const scissors = document.querySelector('.scissors').addEventListener('click', () =>{   
    PlayRound('scissors') 
})


