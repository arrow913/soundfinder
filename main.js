


function searchArtists(artist) {

  var queryURL = "https://rest.bandsintown.com/artists/" + artist + "?app_id=codingbootcamp";

  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function (response) {
    console.log(response);


    var artistName = $("<h1>").text(response.name);
    var artistURL = $("<a>").attr("href", response.url).append(artistName);
    var upcomingEvents = $("<h2>").text(response.upcoming_event_count + " upcoming events");
    var gotoArtist = $("<a>").attr("href", response.url).text("See Tour Dates");

    // Empty the contents, append the new artist content
    $("#artist").empty();
    $("#artist").append(artistURL, upcomingEvents, gotoArtist);
  })
};
    //tastedive Api
function searchArtists(artist) {
  var queryURL = "https://tastedive.com/api/similar?q=" + artist + movies + "&app_id=384826-williama-0FSB2P16";
  $.ajax({
    url: queryURL,
    dataType: "jsonp",
    method: "GET"
  }).then(function (response) {
    console.log(response);
    var artist = $("<h3>").text(response.name);
    $("#artist").empty();
  })
};
$("#button").on("click", function () {
  event.preventDefault();
  var inputArtist = $("#findtext").val().trim();

  searchArtists(inputArtist);
});