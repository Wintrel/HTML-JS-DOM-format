input = document.getElementById("inputnum")
button = document.getElementById("guessbtn")
resultDiv = document.getElementById("result")

button.addEventListener("click", guessNumber)


function guessNumber() {
    UserGuess = Number(input.value)
    RandomNumber = Math.floor(Math.random() * 100) + 1

    if (UserGuess === RandomNum)
}