var X = 10; //assiging global variable
function adding1() {
    document.write(20 + X + "<br>");
}
adding1(); 
document.write("<br>"); //assigning local variable
var X = 10;
function adding2() {
    Y = 20
    document.write(20 + Y + "<br>");
}
adding2();
document.write("<br>");
function adding3() { //used dev tools to degub and fix this
    W = 30
    document.write(20 + W + "<br>");
}
adding3();
document.write("<br>");
function get_Date() { //used if 
    if (new Date().getHours() < 18) {
        document.getElementById("greeting").innerHTML = "How are you today?";
    }
}
document.write("<br>");
function good_night() { //did a makeshift if/else by using 2 ifs before I learned about else  
    if (new Date().getHours() > 20) {
        document.getElementById("goodnight").innerHTML = "Goodnight!";    
    }
}
function good_night() {
    if (new Date().getHours() < 20) {
        document.getElementById("goodnight").innerHTML = "It's not time for bed yet!";    
    }
}
document.write("<br>");
function willFunction() { // if/else functino
   Opinion = document.getElementById("Opinion").value;
   if (Opinion == "Yes") {
       Response = "You like that he stood up for his wife.";
   }
   else {
       Response = "You don't like that he used violence to express his feelings.";
   }
   document.getElementById("will_smith").innerHTML = Response;
}
function Time_function () { // if/else if/else function
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0) {
        Reply = "It is morning time!";
    }
    else if (Time >= 12 == Time < 18) {
        Reply = "It is afternoon.";
    }
    else {
        Reply = "It is evening time.";
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}