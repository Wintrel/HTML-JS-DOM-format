inputbar = document.getElementById("inputnum")
button = document.getElementById("guessbtn")
resultDiv = document.getElementById("result")
historyDiv = document.getElementById("history")
historyList = document.getElementById("historyList")

button.addEventListener("click", guessNumber)

function genereateRandomNumber() {
    return Math.floor(Math.random() * 100) + 1
}

let RandomNumber = genereateRandomNumber()
console.log(RandomNumber)



function guessNumber() {
    UserGuess = Number(inputbar.value)
    let UserAttempts = 0

    switch (true) {
        case (UserGuess === RandomNumber):
            resultDiv.innerHTML = `guessed the number ${RandomNumber} correctly in ${UserAttempts} attempts.`
            RandomNumber = genereateRandomNumber()
            console.log("guessed the number")
            UserAttempts + 1
            break
        case (UserGuess < RandomNumber):
            resultDiv.innerHTML = "Too low"
            console.log("too low")
            UserAttempts + 1
            break
        case (UserGuess > RandomNumber):
            resultDiv.innerHTML = "Too high"
            console.log("too high")
            UserAttempts + 1
            break
    }

    history()
}


function history() {
    const listItem = document.createElement("li")
    listItem.textContent = `Guessed: ${UserGuess}`
    historyList.appendChild(listItem)
}