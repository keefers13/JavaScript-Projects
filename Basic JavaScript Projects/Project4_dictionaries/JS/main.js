function my_Dictionary() {
    var Player = {
        First:"Nikola",
        Last:"Jokic",
        JerseyNumber:15,
        Team:"Denver",
    };
    delete Player.Team;
    document.getElementById("Dictionary").innerHTML = Player.Team;
}
