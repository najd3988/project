// Movie Objects

var movie1 = {
    name: "Frozen",
    year: 2013,
    type: "Animation",
    rating: 7.4
};

var movie2 = {
    name: "Inside Out",
    year: 2015,
    type: "Animation",
    rating: 8.1
};

var movie3 = {
    name: "The Lion King",
    year: 2019,
    type: "Adventure",
    rating: 6.8
};

var movie4 = {
    name: "Spider-Man",
    year: 2021,
    type: "Action",
    rating: 8.2
};


// Function to show movie details

function showDetails(movie) {

    document.getElementById("movieDetails").innerHTML =

        "<h2>" + movie.name + "</h2>" +

        "<p>Year: " + movie.year + "</p>" +

        "<p>Type: " + movie.type + "</p>" +

        "<p>Rating: " + movie.rating + "</p>";

}


function calculateTotal() {

    var tickets = document.getElementById("tickets").value;

    var price = 35;

    if (tickets == "" || tickets <= 0 || tickets % 1 != 0) {

        document.getElementById("result").innerHTML =
            "Please enter a valid number of tickets";

    }
    else {

        var total = tickets * price;

        document.getElementById("result").innerHTML =
            "Total Price: " + total + " SAR";

    }
}