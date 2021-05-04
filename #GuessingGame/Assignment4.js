function submitData() {
    let Min=parseInt(GuessForm.Min.value);
    let Max=parseInt(GuessForm.Max.value); 
}
if(!Min || !Max || Min >= Max )
yourGuess()
{
    var guess1 = document.getElementById("guess").value;
    var guess2 = 500;
    var newGuess = Math.floor(guess2);
    var n = 0;
    let randomNumber = Math.floor(Math.random() * 500) + 1;

    if (userGuess < guess1) {
        yourReturn = "Guess is to low!"
    }
}
    else {
        if (userGuess > guess1){
            yourReturn = "Correct Guess - Winner, Winner!"
        }
    }
    function numberGuessGame(min, max) {
        let num = randomNumber(min, max)
        // declare message variable with something like , "I'm thinking of a number between 'min' and 'max', try to guess it"
        let guess; // declare guess as empty variable so you can modify it from the loop
        do {
            guess = parseInt(prompt(message))
            // if too low modify message to say that their guess is too low
            // if too high, modify message to say that they guess is too high
        } while(..guess is wrong..)
        // modify message to say congratulations!!!
        updateDOM(message, "green");
    }
                    