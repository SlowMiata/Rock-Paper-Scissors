function getComputerChoice(){

    

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


function PlayRound(PlayerChoice){

    let robot = getComputerChoice()

    switch(PlayerChoice){
        case "rock":
            if(robot == "rock"){
                console.log("tie")
                return 0
            }
            else if (robot == "paper"){
                console.log("you lose :C")
                return 0
            }
            else if (robot == "scissors"){
                console.log("you win C:")
                return 1
            }
            break
        
        case "paper":
            if(robot == "paper"){
                console.log("tie")
                return 0
            }
            else if (robot == "scissors"){
                console.log("you lose :C")
                return 0
            }
            else if (robot == "rock"){
                console.log("you win C:")
                return 1
            }
            break

        case "scissors":
            if(robot == "scissors"){
                console.log("tie")
                return 0
            }
            else if (robot == "rock"){
                console.log("you lose :C")
                return 0
            }
            else if (robot == "paper"){
                console.log("you win C:")
                return 1
            }
            break

        default:
            console.log("invalid choice")
            console.log(PlayerChoice)
            return 0
        
    }
    
}

function game(){

    let score = 0


    for(let i = 0; i < 5; i++){
        let choice = prompt("rock, paper scissors shoot");
        score  += PlayRound(choice.toLowerCase())
    }
    console.log("total score is " + score)
}

game()
