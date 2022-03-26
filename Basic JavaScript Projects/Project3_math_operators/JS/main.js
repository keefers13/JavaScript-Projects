function addition_function() {    // this function performs math
    var addition = 2 + 2;
    document.getElementById("Math").innerHTML= "2 + 2 = " + addition;
}

function subtraction_function() {   // this function performs math
    var subtraction = 4 - 2;
    document.getElementById("Minus").innerHTML= "4 - 2 = " + subtraction;
}

function multiplication_function() {   // this function performs math
    var multiplication = 2 * 2;
    document.getElementById("Times").innerHTML= "2 * 2 = " + multiplication;
}

function division_function() {   // this function performs math
    var division = 4 / 2;
    document.getElementById("Divide").innerHTML= "4 / 2 = " + division;
}

function multiple_functions() {   // this function performs math
    var multiple = (1 + 3) / 2;
    document.getElementById("Multiple").innerHTML= "1 plus 3, divided by 2 equals " + multiple;
}

function modulus_function() {   // this function performs math
    var Modulus = 5 % 2;
    document.getElementById("Modulus").innerHTML= "5 divided by 2 gives us a remainder of " + Modulus;
}

function negation_function() {   // this function performs math
    var Negation = 10;
    document.getElementById("Negation").innerHTML= -Negation;
}

var K = 10;   // this adds 1
K++;
document.write(K);

var M = 10;  // this subtracts 1
M--;
document.write(M);


document.write(Math.random() * 10) ; // this gives a random number

document.write(Math.PI)  // this gives a Pi



