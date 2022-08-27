const go = document.querySelector('#go');        
let score = 0;
let cScore = 0;
let mNum = 0;
let match = document.getElementById("mHist");
let clr = document.getElementById("clr");
let rstrt = document.getElementById("rstrt");

const radio = document.querySelectorAll('input[name="janken"]');
    go.addEventListener("click", () => {
        let userInput;
        for (const a of radio) {
            if (a.checked) {
                userInput = a.value;
                break;
            }
        }
        userInput = String(userInput);
                getComputerChoice = () => {
                    let rps = ["rock", "paper", "scissors"]
                    let rNum = Math.floor(Math.random()*3)
                    console.log("The computer chose " + rps[rNum])
                    return rps[rNum];
                }
                let computerChoice = getComputerChoice()
                document.getElementById("computerPlay").innerHTML = computerChoice;
                if(userInput === "rock" || userInput === "paper" || userInput === "scissors"){
                    console.log("You chose "+ userInput)
                    document.getElementById("uChoice").innerHTML = "You chose "+ userInput;
                    if(userInput === computerChoice){
                        console.log("It's a tie!")
                        mNum++;
                        document.getElementById("winner").innerHTML = "It's a tie!";
                        match.insertAdjacentHTML("afterbegin", "<h5> Match " + mNum + ": It's a tie!</h5>");
                    } else if (userInput === "rock"){
                        if(computerChoice === "paper"){
                            match.insertAdjacentHTML("afterbegin", "<h5> Match " + mNum +": The computer won!</h5>");
                            cScore++;
                            mNum++;
                        } else{
                            console.log("You win!")
                            document.getElementById("winner").innerHTML = "You";
                            score++;
                            mNum++;
                            match.insertAdjacentHTML("afterbegin", "<h5> Match " + mNum +": You won!</h5>");
                        }
                    } else if (userInput === "paper"){
                        if(computerChoice === "scissors"){
                            console.log("The computer wins!")
                            document.getElementById("winner").innerHTML = "the Computer";
                            cScore++;
                            mNum++;
                            match.insertAdjacentHTML("afterbegin", "<h5> Match " + mNum +": The computer won!</h5>");
                        } else{
                            console.log("You win!")
                            document.getElementById("winner").innerHTML = "You";
                            score++;
                            mNum++;
                            match.insertAdjacentHTML("afterbegin", "<h5> Match " + mNum +": You won!</h5>");
                        }
                    } else{
                        if(computerChoice === "rock"){
                            console.log("The computer wins!")
                            document.getElementById("winner").innerHTML = "the Computer";
                            cScore++;
                            mNum++;
                            match.insertAdjacentHTML("afterbegin", "<h5> Match " + mNum +": The computer won!</h5>");
                        } else{
                            console.log("You win!")
                            document.getElementById("winner").innerHTML = "You";
                            score++;
                            mNum++;
                            match.insertAdjacentHTML("afterbegin", "<h5> Match " + mNum +": You won!</h5>");
                        }
                    }
                }else{
                    console.log("Error. No user input selected")
                    document.getElementById("uChoice").innerHTML = `Error. No user input. Please choose: rock, paper or scissors`;
                    }
        let comImg = document.getElementById("cImage");
        comImg.src = "Computer/" + computerChoice +".png";

        let uImg = document.getElementById("uImage");
        uImg.src = "User/" + userInput + ".png";
        document.getElementById("greet").src = "";
        document.getElementById("score").innerHTML = score;
        document.getElementById("cScore").innerHTML = cScore;
        clr.addEventListener("click", () => {
            mNum = 0;
            document.getElementById("mHist").innerHTML = "";
            uImg.src = "";
            comImg.src = "";
        });
        rstrt.addEventListener("click", () => {
            cScore = 0;
            score = 0;
            document.getElementById("score").innerHTML = score;
            document.getElementById("cScore").innerHTML = cScore;
            uImg.src = "";
            comImg.src = "";
        });
    });