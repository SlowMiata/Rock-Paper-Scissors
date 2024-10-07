//rock Paper Scissors Shoot Class version
class Game{

    //class fields
    
    //constructor ... what to add
    constructor(){
        this.result = document.querySelector('.result')
        this.robotResult = document.querySelector(".robot")
        this.playerResult = document.querySelector(".player")
        this.scoreDisplay = document.querySelector('.score')
        this.winner = document.querySelector('.winner')
        this.currentScore = document.querySelector('.currentScore')
        this.currentRound = document.querySelector('.round')
        this.playAgain = document.querySelector('.playAgain')

        this.rock = document.querySelector('.rock')
        this.paper =  document.querySelector('.paper')
        this.scissors =  document.querySelector('.scissors')

        this.gameCount = 0;
        this.score = 0;

        this.playAgain.addEventListener('click', () => {
            this.resetGame();
        });

    }


    //methods

    getComputerChoice(){
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

    PlayRound(PlayerChoice){
        this.scoreDisplay.textContent = ''
        this.winner.textContent = ''
    
        this.playerResult.textContent = `You picked: ${PlayerChoice}`
    
        let robot = this.getComputerChoice()
        this.robotResult.textContent = `Robot picked: ${robot}`
        switch(PlayerChoice){
            case "rock":
            if(robot == "rock"){
                this.result.textContent = "tie"
                return 0
            }
            else if (robot == "paper"){
                this.result.textContent = "Robot beats you"
                return 0
            }
            else if (robot == "scissors"){
                this.result.textContent = "You beat robot"
                return 1
            }
            break
            
            case "paper":
            if(robot == "paper"){
                this.result.textContent = "tie"
                return 0
            }
            else if (robot == "scissors"){
                this.result.textContent = "Robot beats you"
                return 0
            }
            else if (robot == "rock"){
                this.result.textContent = "You beat robot"
                return 1
            }
            break
        
            case "scissors":
            if(robot == "scissors"){
                this.result.textContent = "tie"
                return 0
            }
            else if (robot == "rock"){
                this.result.textContent = "Robot beats you"
                return 0
            }
            else if (robot == "paper"){
                this.result.textContent = "You beat robot"
                return 1
            }
            break
        
            default:
            this.result.textContent = "invalid choice"
            console.log(PlayerChoice)
            return 0
            
        }
    }

    game(){
        this.playAgain.style.visibility = 'hidden'
    
        this.rock.addEventListener('click', () =>{  
            this.gameCount += 1 
            this.score += this.PlayRound('rock')
            this.currentScore.textContent =  `Score: ${this.score}`
            this.currentRound.textContent = `Round: ${this.gameCount}/5`
            this.checkGameCountAndDisplayScore()
        })
        this.paper.addEventListener('click', () =>{   
            this.gameCount += 1
            this.score += this.PlayRound('paper')
            this.currentScore.textContent  = `Score: ${this.score}`
            this.currentRound.textContent = `Round: ${this.gameCount}/5`
            this.checkGameCountAndDisplayScore()
        })
        this.scissors.addEventListener('click', () =>{   
            this.gameCount += 1
            this.score += this.PlayRound('scissors') 
            this.currentScore.textContent = `Score: ${this.score}`
            this.currentRound.textContent = `Round: ${this.gameCount}/5`
            this.checkGameCountAndDisplayScore()
        })
    }

    checkGameCountAndDisplayScore() {
        if (this.gameCount === 5) {
            this.rock.style.visibility = 'hidden'
            this.paper.style.visibility = 'hidden'
            this.scissors.style.visibility = 'hidden'
            this.playAgain.style.visibility = 'visible'
            this.scoreDisplay.textContent = `Game over! Your score is ${this.score}`;
            if (this.score < 3){
                this.winner.textContent = "Robot Wins!"
            } else {
                this.winner.textContent = "Player Wins!"
            }    
        }
    }

    resetGame(){
            this.gameCount = 1;
            this.score = 0;
            this.currentScore.textContent = 'Score: 0';
            this.currentRound.textContent = `Round: 1/5`;
            this.playAgain.style.visibility = 'hidden';
            this.rock.style.visibility = 'visible';
            this.paper.style.visibility = 'visible';
            this.scissors.style.visibility = 'visible';
            this.result.textContent = "";
            this.winner.textContent = '';
            this.scoreDisplay.textContent = '';
            this.playerResult.textContent = 'You Picked:';
            this.robotResult.textContent = 'Robot Picked: ';
    }


}

const game = new Game()
game.game()