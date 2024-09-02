document.addEventListener("DOMContentLoaded", function() {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    let attempts = 0;

    document.getElementById("guessButton").addEventListener("click", function() {
        const userGuess = parseInt(document.getElementById("guessInput").value);
        const feedback = document.getElementById("feedback");
        const tries = document.getElementById("tries");

        attempts++;

        if (userGuess < randomNumber) {
            feedback.textContent = "Too low! Try again.";
        } else if (userGuess > randomNumber) {
            feedback.textContent = "Too high! Try again.";
        } else {
            feedback.textContent = `Congratulations! You guessed it in ${attempts}  tries.`;
            document.getElementById("guessButton").disabled = true;
            document.getElementById("guessInput").disabled = true;
        }

        tries.textContent = `Number of attempts:   ${attempts}`;
    });
});
