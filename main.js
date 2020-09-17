


function searchArtists(artist) {

    var queryURL = "https://rest.bandsintown.com/artists/" + artist + "?app_id=codingbootcamp";
    
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log(response);

        var upcomingEvents = $("<h1>").text(response.upcoming_event_count + " Upcoming Events");
        var gotoArtist = $("<a>").attr("href", response.url).text("See Tour Dates");

        // Empty the contents, append the new artist content
        $("#artist").empty();
        $("#artist").append(upcomingEvents, gotoArtist);
    })
};

$("#button").on("click", function () {
    event.preventDefault();
    var inputArtist = $("#findtext").val().trim();

    searchArtists(inputArtist);
});
