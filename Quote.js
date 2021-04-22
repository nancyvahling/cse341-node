function myFunction () {
var person = prompt("What is your favorite phrase or motto? ", "You always gain by giving love.");

if (person != null) {
  document.getElementById("demo").innerHTML =
  "Hello " + person + "! How are you today?";
}
