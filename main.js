// var granimInstance = new Granim({
//     element: '#canvas-basic',
//     direction: 'diagonal',
//     isPausedWhenNotInView: true,
//     states : {
//         "default-state": {
//             gradients: [
//                 ['#ff9966', '#ff5e62'],
//                 ['#00F260', '#0575E6'],
//                 ['#e1eec3', '#f05053']
//             ]
//         }
//     }
// });

// // BandsInTown API Call
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
    });

    // Youtube API Call
    var youtubeApiKey = "AIzaSyBmk_5NIy0Lqp_6usUzPRx-pD3Zk-LRXHY";

    var queryURL2 = "https://www.googleapis.com/youtube/v3/search" + "?part=snippet&q=" + artist + "&type=video&videoCaption=closedCaption&key=" + youtubeApiKey;
    $("#results").empty();
    $.ajax({
        url: queryURL2,
        method: "GET"
    }).then(function (response) {
        console.log(response);

        var iframe = `<iframe width="560" height="315" src="https://www.youtube.com/embed/${response.items[0].id.videoId}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;

        // Empty the contents, append the new video
        $("#results").append(iframe);

    });
};

$("#searchButton").on("click", function () {
    event.preventDefault();
    var inputArtist = $("#findtext").val().trim();

    searchArtists(inputArtist);
});
