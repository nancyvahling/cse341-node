alert ("What is your favorite Motto?")

var person = prompt("Please enter your favorite Motto");
let txt;
if (person == null || person == "") {
    txt = "User cancelled the prompt.";
} else {
txt = "{} is a nice Motto". format(favorite_motto);
}
alert(txt);   

var i = 1;
    while(i <= 5) {    
        console.log(" " + i + "");
        i++;
    }



// alert ("What is your favorite Motto?")
// favorite_motto = input("what is your favorite Motto?" )
// print(" {} is a nice Motto".format(favorite_motto))

// var p = prompt("How many times do you want to see your favorite Motto?");
// console.log(createMenu(p));

// for (var i = 0; i < numberOfMotto; i++) {  // Repeat numberofMotto x times

//     // Randomly select an element from each array
//     var m = main[Math.floor(Math.random() * main.length)];
//     var d = favorite_motto[Math.floor(Math.random() * favorite_motto.length)];
//     var b = favorite_motto[Math.floor(Math.random() * favorite_motto.length)];

//     // Add menu to menus object
//     favorite_motto[i] = [m, d, b];
