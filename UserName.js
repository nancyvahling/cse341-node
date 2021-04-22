alert ("What is your name?")

     var person = prompt("Please enter your name");

     if (person == null || person == "") {
       txt = "User cancelled the prompt.";
     } else {
       txt = "Hello " + person + "! I hope you have a lovely day!";
     }
     
