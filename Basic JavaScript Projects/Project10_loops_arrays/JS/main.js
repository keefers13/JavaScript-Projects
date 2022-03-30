function counting() { // counting to 10 function
    var X = "";
    var Y = 1;
    while (Y < 11) {
        X += "<br>" + Y;
        Y++;
    }
    document.getElementById("Loop").innerHTML = X;
}
document.write("<br>");
function blue() { //string.length method
    var S = "stringLength";
    document.getElementById("stringLength").innerHTML = S.length;
}
document.write("<br>");
var Instruments = ["Guitar", "Drums", "Piano"]; //writing a list using a for loop
var Content = "";
var Y;
function for_Loop() {
    for (Y = 0; Y < Instruments.length; Y++) {
    Content += Instruments[Y] + "<br>";
    }
    document.getElementById("instruments").innerHTML = Content;
}
document.write("<br>");
function array_Function() { //made an array and wrote an item from it. 
    let Item = []; //utilized let with block scope
    Item[0] = "Item0"
    Item[1] = "Item1"
    Item[2] = "Item2"
    document.getElementById("Array").innerHTML = "This is " + Item[2] + " of the array.";
}
document.write("<br>");
function constant_function() { // used constant and changed it
    const NBA_Player = {name:"Jokic", number:"15", team:"Denver"};
    NBA_Player.name = "Nikola";
    document.getElementById("constant").innerHTML = "He plays for " + NBA_Player.team + ".";
}
document.write("<br>");
function hola() { //used return
    let texto = "Hola";
    return texto.length;
}
document.getElementById("hola").innerHTML = hola();
document.write("<br>");
let player = {  //specified an object and used let.
    name: "Nikola Jokic ",
    number: "15",
    description : function() {
        return "His name is " + this.name + "and his number is " + this.number + ".";
    }
};
document.getElementById("Jokic").innerHTML = player.description();
document.write("<br>"); // continue statement
let text = "";
for (let i = 0; i < 5; i++) {
  if (i === 3) { continue; }
  text += "The number is " + i + "<br>";
}
document.getElementById("demo1").innerHTML = text;
document.write("<br>");
let texts = ""; // break statement
for (let i = 0; i < 10; i++) {
  if (i === 3) { break; }
  texts += "number is " + i + "<br>";
}
document.getElementById("demo2").innerHTML = texts;