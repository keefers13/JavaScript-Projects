function full_sentence() { // concatenated the sentence
    var part_1 = "Hello, "
    var part_2 = "World!"
    var whole_sentence = part_1.concat(part_2);
    document.getElementById("Concatenate").innerHTML = whole_sentence;
}
function slice_method() { //sliced the sentence
    var Sentence = "Can Earth hear me?"
    var Section = Sentence.slice(4,9);
    document.getElementById("Slice").innerHTML = Section;
}
var text = "Hello, my friend!"; // declared a variable
document.write(text.toUpperCase()); // uppercase method
document.write("<br>");
document.write(text.search("my")); //search method
document.write("<br>");
function string_method() { //to string method
    var M = 182;
    document.getElementById("Numb").innerHTML = M.toString();
}
document.write("<br>");
var P = 123.4555
document.write(P.toPrecision(6)); //to precision
document.write("<br>");
document.write(text.valueOf()); //valueOf method
document.write("<br>");
var n = P.toFixed(); //to fixed method
document.write(n);
