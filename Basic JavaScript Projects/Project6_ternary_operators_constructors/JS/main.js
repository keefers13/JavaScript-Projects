function Vote_Function() { //ternary operaction function
    var Age, Can_Vote;
    Age = document.getElementById("Age").value;
    Can_Vote = (Age < 18) ? "You are too young":"You are old enough";
    document.getElementById("Vote").innerHTML = Can_Vote + " to vote.";
}

function Vehicle(Make, Model, Year, Color) { //function using new and this and constructor function
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}
var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");
function myFunction() {
    document.getElementById("Keywords_and_Constructors").innerHTML =
    "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model +
    " manufactured in " + Erik.Vehicle_Year + ".";
}

function Player(Name, Team, Position) { //function using new and this and constructor function
    this.Player_Name = Name;
    this.Player_Team = Team;
    this.Player_Position = Position;
}
var Nikola = new Player("Nikola Jokic", "Denver", "Point-Center");
function nbaFunction() {
    document.getElementById("NBA_Player_Info").innerHTML =
    Nikola.Player_Name + " plays for " + Nikola.Player_Team +
    " as a " + Nikola.Player_Position + ".";
}

function count_Function() { //nested function
    document.getElementById("Nested_Function").innerHTML = Count();
    function Count() {
        var Starting_point = 10;
        function Plus_one() {Starting_point += 1;}
        Plus_one();
        return Starting_point;
    }
}