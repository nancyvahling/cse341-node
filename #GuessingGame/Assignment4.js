function submitData() {
    const min_value = parseInt(document.getElementById("min-number").value);
    const max_value = parseInt(document.getElementById("max-number").value);

if (min_value == "" || max_value == "") {
    updateDom("Your number is not valid! Please enter a value in both inputs.", "red");
    return;
}

if (!Number.isInteger(+min_value) || !Number.isInteger(+max_value)) {
    updateDom("Please input a valid number for both the input boxes above", "red");
    return;
}

if (min_value < 1 || min_value > 125) {
    updateDom("Data is not valid! Please given numbers from 1-125 only.", "red");
    return;
}
if (max_value < 1 || max_value > 125) {
    updateDom("Data is not valid! Please given numbers from 1-125 only.", "red");
    return;
}
if (min_value >= max_value) {
    updateDom("Low number should be lesser than the high number... silly! You know this!", "red");
    return;
}
numberGuessGame(parseInt(min_value), parseInt(max_value))

}
function updateDom(value, color) {
    document.getElementById("output").innerHTML = value; //make sure you have a div in your html file with id of output.
    document.getElementById("output").style.color = color;
    //update div color also.

}
function numberGuessGame(min_value, max_value) {
    let random,randomHintMsg = "I am thinking of a number between " + min_value + " and " + max_value,rangeError=false,
        randomNumberGenerated = randomNumber(+min_value, +max_value), guessedItems = [],guessedItemsString="Guessed integers - ",
        attempts = 0;
    do {
        if(rangeError){
            randomHintMsg = random + " is invalid number for given range.";
            rangeError=false;
        }else{

            attempts++;
        if(random && random > randomNumberGenerated){ 
            randomHintMsg = random + " is high. Please enter a different number.";
        
    }
    if(random && random < randomNumberGenerated){
        randomHintMsg = random+ " is low. Please try again.";
    }
}
random = prompt(randomHintMsg +".\n Try to guess it!\n Please enter a number between " + min_value + " and " + max_value + ".", '');

if (random == null) {
    return;
}else{
    if(random<min_value || random>max_value){
        rangeError = true;
}else{
    guessedItems.push(random)
    }
}
if (random == randomNumberGenerated){
    guessedItems.forEach(function(item,index){
        let comma = "";
        if(index < guessedItemsString.length-1){comma=","}
        guessedItemsString = guessedItemsString+item+comma;
    })
    updateDom("Congratulations, your smart!! " +randomNumberGenerated + " is correct! It only took you " + attempts + " guesses.<br />"+guessedItemsString, "green");
}
    } while (random !=randomNumberGenerated)
}
function randomNumber(min, max) {
    let randomNum = Math.random() * (max - min) + min;
    return Math.round(randomNum);
}













// function submitData() {
//     let Min=parseInt(GuessForm.Min.value);
//     let Max=parseInt(GuessForm.Max.value); 
// }
// if(!Min || !Max || Min >= Max )
// yourGuess()
// {
//     var guess1 = document.getElementById("guess").value;
//     var guess2 = 100;
//     var newGuess = Math.floor(guess2);
//     var n = 0;
//     let randomNumber = Math.floor(Math.random() * 100) + 1;

//     if (userGuess < guess1) {
//         yourReturn = "Guess is to low!"
//     }
// }
//     else {
//         if (userGuess > guess1){
//             yourReturn = "Correct Guess - Winner, Winner!"
//         }
//     }
//     function numberGuessGame(min, max) {
//         let num = randomNumber(min, max)
//         // declare message variable with something like , "I'm thinking of a number between 'min' and 'max', try to guess it"
//         let guess; // declare guess as empty variable so you can modify it from the loop
//         do {
//             guess = parseInt(prompt(message))
//             // if too low modify message to say that their guess is too low
//             // if too high, modify message to say that they guess is too high
//         } while(..guess is wrong..)
//         // modify message to say congratulations!!!
//         updateDom(message, "green");
//     }
                    