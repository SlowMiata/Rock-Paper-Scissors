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
                return "tie"
            }
            else if (robot == "paper"){
                console.log("you lose :C")
                return ("you losE :c")
            }
            else if (robot == "scissors"){
                console.log("you win C:")
                return "you win C:"
            }
            break
        
        case "paper":
            if(robot == "paper"){
                console.log("tie")
                return "tie"
            }
            else if (robot == "scissors"){
                console.log("you lose :C")
                return ("you losE :c")
            }
            else if (robot == "rock"){
                console.log("you win C:")
                return "you win C:"
            }
            break

        case "scissors":
            if(robot == "scissors"){
                console.log("tie")
                return "tie"
            }
            else if (robot == "rock"){
                console.log("you lose :C")
                return ("you losE :c")
            }
            else if (robot == "paper"){
                console.log("you win C:")
                return "you win C:"
            }
            break

        default:
            console.log("invalid choice")
            return "invalid"
        
    }
    
}

function main(){
    let choice = prompt("rock, paper scissors shoot");
    PlayRound(choice.toLowerCase)
}
main()
