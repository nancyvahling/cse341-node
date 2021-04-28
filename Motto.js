
//  function getMotto() {
//     let userPhrase = prompt("Please enter your favorite Motto to live by");
//     return userPhrase;
     
//  }
//  function getCount(userMotto) {
//      let userCount = prompt("Please enter the amount of times you would like to see" + userMotto + "your motto:");
//      return parseFloat(userCount);
//  }
// function playAgain() {
// let playAgainString = prompt("Would you like to play again (y/n)?");

// if(playAgainString === "y") {
// playGame();
// } else {
// alert("Thanks for playing!");
// }
// function printMotto(motto, count) {

//     let i = 1;
//     let message = "";
//     while (i <= count) {
//         message = message + i + ". " + motto + "<br>";
//         i++;
//     }
//     document.getElementById("output").innerHTML = "5:15pm";
// }

// function playGame() {
//     let userMotto = getMotto();
//     let count = getCount(userMotto);
    
//     printMotto(userMotto, count);
//     playAgain();
// }


// // window.onload = function() {
// playGame();

  
function getMotto() {
    let userPhrase = prompt("Please enter your favorite phrase or motto to live by:");
    return userPhrase;
}

function getCount(userMotto) {
    let userCount = prompt("Please enter the number of times you'd like to see " + userMotto +  " your motto:");
    return parseFloat(userCount);
}

function playAgain() {
    let playAgainString = prompt("Would you like to play again (y/n)?");

    if(playAgainString === "y") {
        playGame();
    } else {
        alert("Thanks for playing!");
    }
}

function printMotto(motto, count) {
 

    let i = 1;
    let message = "";
    while (i <= count) {
        message = message + i + ". " + motto + "<br>";
        i++;
    }
    document.getElementById("output").innerHTML = "8:25am";
}

function playGame() {
    let userMotto = getMotto();
    let count = getCount(userMotto);
    
    printMotto(userMotto, count);
    playAgain();
}

playGame();
