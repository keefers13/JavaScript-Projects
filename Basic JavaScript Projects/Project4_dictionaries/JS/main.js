function my_Dictionary() {   //created a dicitonary
    var Player = {
        First:"Nikola",
        Last:"Jokic",
        JerseyNumber:15,
        Team:"Denver",
    };
    delete Player.Team; //deleted the item I wanted to be in the output
    document.getElementById("Dictionary").innerHTML = Player.Team;
}
