//var granimInstance = new Granim({
//element: '#canvas-basic',
//direction: 'diagonal',
//isPausedWhenNotInView: true,
//states : {
//"default-state": {
//    gradients: [
//        ['#ff9966', '#ff5e62'],
//        ['#00F260', '#0575E6'],
//        ['#e1eec3', '#f05053']
//    ]
// }
// }
//});

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


    var queryURLA = "https://tastedive.com/api/similar?q=" + artist + "&app_id=384826-williama-NJI189T2";
    $.ajax({
      url: queryURLA,
      dataType: "jsonp",
      method: "GET"
    }).then(function (response) {
      $("#results").empty();
          var count = 5 
      for (var i=0 ;i< count; i++ ){
        console.log(response.Similar.Results[i].Name);
        var results = $("<ul>").text(response.Similar.Results[i].Name);
        
        $("#results").append(results);
      }
    })
  })
}
  //var queryURL = "https://developers.google.com/artist" + artist + ""


   $("#searchButton").on("click", function () {
    event.preventDefault();
    var inputArtist = $("#findtext").val().trim();

    searchArtists(inputArtist);
  });