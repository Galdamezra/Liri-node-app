//request npm package
var request = require("request");
//fs npm package
var fs = require("fs");
//spotify npm package
var Spotify = require('node-spotify-api');
//twitter npm package
var Twitter = require('twitter');

// //store all arguments in an array
// var nodeArgs = process.argv;

var userAction = process.argv[2];
var userDefine = process.argv[3];


//create an empty variable for holding the movie name
var movieName = "";

function theSwitch() {
  switch(userAction) {

    case 'my-tweets':
    getTweets();
    break;

    case 'spotify-this-song':
    spotifyMe();
    break;

    case 'movie-this':
    movieSearch();
    break;

    case 'do-what-it-says':
    readTextFile();
    break;
  }
};

function movieSearch() {

    var searchMovie;

    if(searchMovie === undefined){
        searchMovie = "Mr. Nobody";
    } else {
        searchMovie = userDefine;
    }

    var query = 'http://www.omdbapi.com/?t=' + searchMovie +'&apiKey=40e9cece&y=&plot=long&tomatoes=true&r=json';

    request(query, function(err, response, body){
        if(!err && response.statusCode == 200){
            console.log('========================================');
            console.log("Title: " + JSON.parse(body).Title);
            console.log("Year: " + JSON.parse(body).Year);
            console.log("IMDb Rating: " + JSON.parse(body).imdbRating);
            console.log("Country: " + JSON.parse(body).Country);
            console.log("Language: " + JSON.parse(body).Language);
            console.log("Plot: " + JSON.parse(body).Plot);
            console.log("Actors: " + JSON.parse(body).Actors);
            console.log("Rotten Tomatoes Rating: " + JSON.parse(body).tomatoRating);
            console.log("Rotten Tomatoes URL: " + JSON.parse(body).tomatoURL);
            console.log('=========================================');
        }
    });
    // //loop through all words
    // for (var i=3; i < nodeArgs.length; i++) {
    //   if (i > 3 && i < nodeArgs.length) {
    //     movieName = movieName + "+" + nodeArgs[i];
    //   }
    //   else {
    //     movieName += nodeArgs[i];
    //   }
    // }
    //
    // //run reques to OMDB API
    // var queryURL = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=40e9cece";
    //
    // console.log(queryURL);
    //
    // request(queryURL, function(error, response, body) {
    //
    //   if (!error && response.statusCode === 200) {
    //
    //     console.log("Title: " + JSON.parse(body).Title);
    //     console.log("Release Year: " + JSON.parse(body).Year);
    //     console.log("IMBD Rating: " + JSON.parse(body).imdbRating);
    //     console.log("Rotten Tomatoes Rating: " + JSON.parse(body).imdbRating);
    //     console.log("Country: " + JSON.parse(body).Country);
    //     console.log("Language: " + JSON.parse(body).Language);
    //     console.log("Plot: " + JSON.parse(body).Plot);
    //     console.log("Actors: " + JSON.parse(body).Actors);
    //   }
    // });
};

function getTweets() {

};

function getSong() {

};
