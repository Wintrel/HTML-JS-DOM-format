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
UserAttempts = 0



function guessNumber() {
    UserGuess = Number(inputbar.value)

    switch (true) {
        case (UserGuess === RandomNumber):
            resultDiv.innerHTML = `guessed the number ${RandomNumber} correctly in ${UserAttempts} attempts.`
            newNumber = genereateRandomNumber()
            RandomNumber = newNumber
            console.log(newNumber)
            UserAttempts = 0
            console.log("guessed the number")
            break
        case (UserGuess < RandomNumber):
            resultDiv.innerHTML = "Too low"
            UserAttempts++
            console.log("too low")
            break
        case (UserGuess > RandomNumber):
            resultDiv.innerHTML = "Too high"
            UserAttempts++
            console.log("too high")
            break
        default:
            UserAttempts++
    }

    history()
}


function history() {
    const listItem = document.createElement("li")
    listItem.textContent = `Guessed: ${UserGuess}`
    historyList.appendChild(listItem)
}