function getReceipt() {
    //this initializes our string so it can get passed from
    // function to function, growing line by line into a full receipt
    var text1 = "<h3>You ordered:</h3>";
    var runningTotal = 0;
    var sizeTotal = 0;
    var sizeArray = document.getElementsByClassName("size");
    for (var i = 0; i < sizeArray.length; i++) {
        if (sizeArray[i].checked) {
            var selectedSize = sizeArray[i].value;
            text1 = text1+selectedSize+"<br>";
        }
    } // tese else if statements determine the price of each size.
    if (selectedSize === "Personal Pizza") {
        sizeTotal = 6;
    } else if (selectedSize === "Small Pizza") {
        sizeTotal = 8; 
    } else if (selectedSize === "Medium Pizza") {
        sizeTotal = 10;
    } else if (selectedSize === "Large Pizza") {
        sizeTotal = 14;
    } else if (selectedSize === "Extra Large Pizza") {
        sizeTotal = 16;
    }
    runningTotal = sizeTotal;
    console.log(selectedSize+" = $"+sizeTotal+".00");
    console.log("size text1: "+text1);
    console.log("subtotal: $"+runningTotal+".00");
    //these variables will get passed on to each function
    getTopping(runningTotal,text1);
};

function getTopping(runningTotal, text1) { //this takes the info from the size price and adds the toppings.
    var toppingTotal = 0;
    var selctedTopping = [];
    var toppingArray = document.getElementsByClassName("toppings");
    for (var j = 0; j < toppingArray.length; j++) {
        if (toppingArray[j].checked) {
            selctedTopping.push(toppingArray[j].value);
            console.log("Selected topping item: ("+toppingArray[j].value+")");
            text1 = text1+toppingArray[j].value+"<br>";
        }
    }
    var toppingCount = selctedTopping.length; 
    if (toppingCount > 1) { // this gives one free topping, subtracting 1 from any number above one.
        toppingTotal = (toppingCount - 1);
    } else { //if the topping total is <= 1, then it/s 0
        toppingTotal = 0;
    }
    runningTotal = (runningTotal + toppingTotal); //this adds the topping number to the size of the pizza.
    console.log("total selected topping items: "+toppingCount); //the below code writes out the receipt 
    console.log(toppingCount+" topping - 1 free topping = "+"$"+toppingTotal+".00");
    console.log("topping text1: "+text1);
    console.log("Purchase Total: "+"$"+runningTotal+".00");
    document.getElementById("showText").innerHTML=text1;
    document.getElementById("totalPrice").innerHTML = "<h3>Total: <strong>$"+
        runningTotal+".00"+"</strong></h3>";

};