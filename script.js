const time = document.getElementById("time")
const choice1 = document.getElementById("choice1")
const choice2 = document.getElementById("choice2")
const choice3 = document.getElementById("choice3")
const result = document.getElementById("result")
const choices = ["rock","paper","scissors"]
let computer_choice = choices[Math.floor(Math.random()*choices.length)]

let symbols = ["1","2","3"]

//functions
function rock() {
    let count = 0
setTimeout(() => {
    time.innerText = symbols[count]
    count++
},1000)
setTimeout(() => {
    time.innerText = symbols[count]
    count++
},2000)
setTimeout(() => {
    time.innerText = symbols[count]
    count++
},3000);
//timer

    choice2.style.display = "none"
    choice3.style.display = "none"
    document.getElementById("player_choose").textContent = "rock"
    choice1.removeEventListener("click", rock)
    document.getElementById("new_game").removeEventListener("click", new_game)

setTimeout(() => {
    let computer_choice = choices[Math.floor(Math.random()*choices.length)]
    if(computer_choice == "paper") {
        result.textContent = "Lose"
    }
    if(computer_choice == "rock") {
        result.textContent = "Draw"
    }
    if(computer_choice == "scissors") {
        result.textContent = "Win"
    }
    document.getElementById("computer_choose").textContent = computer_choice
    document.getElementById("new_game").addEventListener("click", new_game)
},4000)
}

function paper() {
    let count = 0
    setTimeout(() => {
        time.innerText = symbols[count]
        count++
    },1000)
    setTimeout(() => {
        time.innerText = symbols[count]
        count++
    },2000)
    setTimeout(() => {
        time.innerText = symbols[count]
        count++
    },3000);
//timer

choice1.style.display = "none"
choice3.style.display = "none"
document.getElementById("player_choose").textContent = "paper"
choice2.removeEventListener("click", paper)
document.getElementById("new_game").removeEventListener("click", new_game)

setTimeout(() => {
    let computer_choice = choices[Math.floor(Math.random()*choices.length)]
    if(computer_choice == "paper") {
        result.textContent = "Draw"
    }
    if(computer_choice == "rock") {
        result.textContent = "Win"
    }
    if(computer_choice == "scissors") {
        result.textContent = "Lose"
    }
    document.getElementById("computer_choose").textContent = computer_choice
    document.getElementById("new_game").addEventListener("click", new_game)
},4000)
}

function scissors() {
    let count = 0
    setTimeout(() => {
        time.innerText = symbols[count]
        count++
    },1000)
    setTimeout(() => {
        time.innerText = symbols[count]
        count++
    },2000)
    setTimeout(() => {
        time.innerText = symbols[count]
        count++
    },3000);
//timer

choice1.style.display = "none"
choice2.style.display = "none"
document.getElementById("player_choose").textContent = "scissors"
choice3.removeEventListener("click", scissors)
document.getElementById("new_game").removeEventListener("click", new_game)

setTimeout(() => {
    let computer_choice = choices[Math.floor(Math.random()*choices.length)]
    if(computer_choice == "paper") {
        result.textContent = "Win"
    }
    if(computer_choice == "rock") {
        result.textContent = "Lose"
    }
    if(computer_choice == "scissors") {
        result.textContent = "Draw"
    }
    document.getElementById("computer_choose").textContent = computer_choice
    document.getElementById("new_game").addEventListener("click", new_game)
},4000)
}

function new_game() {
    if(result.innerText == "") {
        alert("First a game!")
    } else {
        //reset the buttons
        choice1.style.display = "block"
        choice2.style.display = "block"
        choice3.style.display = "block"
        //reset the event listeners
        choice1.addEventListener("click", rock)
        choice2.addEventListener("click", paper)
        choice3.addEventListener("click", scissors)
        //reset the content
        result.textContent = ""
        document.getElementById("player_choose").textContent = ""
        document.getElementById("computer_choose").textContent = ""
        time.innerText = "VS"
    }
}

function stats() {
    if(result.textContent == "Win") {
    wins++
    }
    if(result.textContent == "Draw") {
    draws++
    }
    if(result.textContent == "Lose") {
    loses++
    }
    document.getElementById("wins").textContent = `Wins: ${wins}`
    document.getElementById("draws").textContent = `Draws: ${draws}`
    document.getElementById("loses").textContent = `Loses: ${loses}`   
}

//functions end
//event listeners
choice1.addEventListener("click", rock)
choice2.addEventListener("click", paper)
choice3.addEventListener("click", scissors)
document.getElementById("new_game").addEventListener("click", new_game)
document.getElementById("new_game").addEventListener("click", stats)

let wins = 0
let draws = 0
let loses = 0