$(document).ready(function() {
    var database = firebase.database();

    // BEGIN weather api
    function getWeather (city) {
        let queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&APPID=083d3eb2292f5bf714789f4f2412af5a";
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {
            console.log(response)
            currentTemperature = Math.round((response.main.temp_max - 273.5) * 9/5 + 32);
            
            $("#weather-description").append(`Today's weather in ${city} is ${response.weather[0].description}.`);
            $("#current-temperature").append(`The current temperature is ${currentTemperature}°`);


        })
    }
    // END weather api

    // BEGIN New York Times API

    function getNews(input1, input2, input3) {
        let queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + '&fq=news_desk:("Sports")' + "&api-key=aLJdnOdoGzFIuwTyY3VQKCwWllm8UqfE";
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {
            console.log(response);
            $("#news-interest-1").append(response.response.docs[0].abstract);
        })



    }

    // END New York Times API

    // START API CALLS BELOW
        // if the user has the local storage items we've given them...
        if (localStorage.getItem("name") && localStorage.getItem("email")) {

            console.log("local Name", localStorage.getItem("name"))
            console.log("local Email", localStorage.getItem("email"))

            //...then we search our firebase for a corresponding email, then look at the associated user object
            database.ref('/users').orderByChild('email').equalTo(localStorage.getItem("email")).on("value", snapshot => {
                console.log('snapshot.val()', snapshot.val());
                    //we do something to each key in object
                    snapshot.forEach(function(data) {
                    console.log("data.key", data.key);
                    console.log("snapshot.val()[data.key].name", snapshot.val()[data.key].name);
                    console.log("snapshot.val()[data.key].city", snapshot.val()[data.key].city);
                    
                    //makes AJAX call to run api.  TODO: Add the other api calls here
                    $("#user-name-header").append(snapshot.val()[data.key].name)
                    
                    getWeather(snapshot.val()[data.key].city);
                    getNews("San Francisco");
                 

                });
            })
        } 
    // END API CALLS

}) 