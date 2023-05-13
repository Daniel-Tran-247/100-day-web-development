const icon_list = document.querySelectorAll(".icon");
const you_icon = document.querySelector(".you-icon");
const computer_icon = document.querySelector(".computer-icon");

let score = {
    wins: 0,
    loses: 0,
    draws: 0,
}


function resetScore() {
    score.wins = 0;
    score.loses = 0;
    score.draws = 0;
}

function generateGame() {
    localStorage.setItem("score", JSON.stringify(score));
    score = JSON.parse(localStorage.getItem("score"));

    for (let i = 0; i < 3; i++) {
        icon_list[i].addEventListener("click", function () {
            you_icon.innerHTML = icon_list[i].innerHTML;
        })
    }

    let randNum = Math.floor(Math.random()*3);
    computer_icon.innerHTML = icon_list[randNum].innerHTML;  

    let your_choice = you_icon.innerHTML;
    let computer_choice = computer_icon.innerHTML;

    if (your_choice === "✊") {
        if (computer_choice === "✊") {
            document.querySelector("#result").innerHTML = "Draw 🤝";
            score.draws ++; 
        }
        else if (computer_choice === "✌️") {
            document.querySelector("#result").innerHTML = "You Win! 🚩";
            score.wins ++; 
        }
        else {
            document.querySelector("#result").innerHTML = "You lose 😭";
            score.loses ++;
        }
    }

    else if (your_choice === "✋") {
        if (computer_choice === "✋") {
            document.querySelector("#result").innerHTML = "Draw 🤝";
            score.draws ++; 
        }
        else if (computer_choice === "✊") {
            document.querySelector("#result").innerHTML = "You Win! 🚩";
            score.wins ++; 
        }
        else {
            document.querySelector("#result").innerHTML = "You lose 😭";
            score.loses ++;
        }
    }

    else {
        if (computer_choice === "✌️") {
            document.querySelector("#result").innerHTML = "Draw 🤝";
            score.draws ++; 
        }
        else if (computer_choice === "✋") {
            document.querySelector("#result").innerHTML = "You Win! 🚩";
            score.wins ++; 
        }
        else {
            document.querySelector("#result").innerHTML = "You lose 😭";
            score.loses ++;
        }
    }

    document.querySelectorAll(".scoreboard p span")[0].textContent = score.wins;
    document.querySelectorAll(".scoreboard p span")[1].innerHTML = score.loses;
    document.querySelectorAll(".scoreboard p span")[2].innerHTML = score.draws;

}



