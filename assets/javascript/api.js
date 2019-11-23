var database = firebase.database();
$(document).ready(function () {


    // BEGIN weather api
    function getWeather(city) {
        let queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&APPID=" + weatherAPI;
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {
            // console.log(response)
            currentTemperature = Math.round((response.main.temp_max - 273.5) * 9 / 5 + 32);

            $("#weather-description").append(`In ${city}, we have <strong>${response.weather[0].description}</strong>,`);
            $("#current-temperature").append(`and it's currently <strong>${currentTemperature}°</strong> outside`);

        })
    }
    // END weather api

    // BEGIN New York Times API

    function getNews(input1, input2, input3) {
        let queryURL1 = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + `&fq=news_desk:("${input1}")` + "&api-key=" + nytAPI;
        $.ajax({
            url: queryURL1,
            method: "GET"
        }).then(function (response) {
            // console.log(response);
            $("#news-interest-1-headline").append(`<strong>${response.response.docs[0].headline.main}</strong>`);
            $("#news-interest-1-abstract").append(response.response.docs[0].abstract);
        })

        let queryURL2 = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + `&fq=news_desk:("${input2}")` + "&api-key=" + nytAPI;
        $.ajax({
            url: queryURL2,
            method: "GET"
        }).then(function (response2) {
            // console.log(response2);
            $("#news-interest-2-headline").append(`<strong>${response2.response.docs[0].headline.main}</strong>`);
            $("#news-interest-2-abstract").append(response2.response.docs[0].abstract);
        })

        let queryURL3 = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + `&fq=news_desk:("${input3}")` + "&api-key=" + nytAPI;
        $.ajax({
            url: queryURL3,
            method: "GET"
        }).then(function (response3) {
            // console.log(response3);
            $("#news-interest-3-headline").append(`<strong>${response3.response.docs[0].headline.main}</strong>`);
            $("#news-interest-3-abstract").append(response3.response.docs[0].abstract);
        })

    }

    // END New York Times API
    // Start Stock API Call



    function getStock() {
        var api = "https://www.alphavantage.co";
        var query1 = "/query?function=GLOBAL_QUOTE&symbol=DJI";
        var query2 = "/query?function=GLOBAL_QUOTE&symbol=NDAQ";
        var query3 = "/query?function=GLOBAL_QUOTE&symbol=GOOG";
        var query4 = "/query?function=GLOBAL_QUOTE&symbol=FB";
        var query5 = "/query?function=GLOBAL_QUOTE&symbol=AAPL";
        var key = "&apikey=" + stockAPI + "&datatype=json";

        console.log("Button Clicked!")
        var xhr = $.get(api + query1 + key).done(function (xhr) {
            // console.log("success got data", JSON.stringify(xhr));
            var stockReply = xhr;
            // console.log(stockReply)

            $("#You").append("Name: " + "DOW Jones", "<br>")
            $("#You").append("Symbol: " + `${stockReply['Global Quote']['01. symbol']}`, "<br>")
            $("#You").append("Price($): " + `${stockReply['Global Quote']['05. price']}`, "<br>")
            $("#You").append("Change: " + `${stockReply['Global Quote']['10. change percent']}`, "<br>", "<br>")
        })

        "<br>"

        var xhr = $.get(api + query2 + key).done(function (xhr) {
            // console.log("success got data");
            var stockReply = xhr
            // console.log(stockReply)

            $("#Are").append("Name: " + "NASDAQ", "<br>")
            $("#Are").append("Symbol: " + `${stockReply['Global Quote']['01. symbol']}`, "<br>")
            $("#Are").append("Price($): " + `${stockReply['Global Quote']['05. price']}`, "<br>")
            $("#Are").append("Change: " + `${stockReply['Global Quote']['10. change percent']}`, "<br>", "<br>")
            "<br>"
        })


        var xhr = $.get(api + query3 + key).done(function (xhr) {
            // console.log("success got data");
            var stockReply = xhr
            // console.log(stockReply)

            $("#The").append("Name: " + "Google", "<br>")
            $("#The").append("Symbol: " + `${stockReply['Global Quote']['01. symbol']}`, "<br>")
            $("#The").append("Price($): " + `${stockReply['Global Quote']['05. price']}`, "<br>")
            $("#The").append("Change: " + `${stockReply['Global Quote']['10. change percent']}`, "<br>", "<br>")
            "<br>"
        })

        var xhr = $.get(api + query4 + key).done(function (xhr) {
            // console.log("success got data");
            var stockReply = xhr
            // console.log(stockReply)

            $("#Best").append("Name: " + "Facebook", "<br>")
            $("#Best").append("Symbol: " + `${stockReply['Global Quote']['01. symbol']}`, "<br>")
            $("#Best").append("Price($): " + `${stockReply['Global Quote']['05. price']}`, "<br>")
            $("#Best").append("Change: " + `${stockReply['Global Quote']['10. change percent']}`, "<br>", "<br>")
            "<br>"
        })

        var xhr = $.get(api + query5 + key).done(function (xhr) {
            // console.log("success got data");
            var stockReply = xhr
            // console.log(stockReply)

            $("#Train").append("Name: " + "Apple", "<br>")
            $("#Train").append("Symbol: " + `${stockReply['Global Quote']['01. symbol']}`, "<br>")
            $("#Train").append("Price($): " + `${stockReply['Global Quote']['05. price']}`, "<br>")
            $("#Train").append("Change: " + `${stockReply['Global Quote']['10. change percent']}`, "<br>", "<br>")
            "<br>"
        })

    }

    // Start Bart Service Annoucement Calls


    function getBSA() {
        var apis = "http://api.bart.gov/api/bsa.aspx";
        var querys = "?cmd=bsa";
        var keys = "&key=" + bartbsaAPI + "&json=y";
        let arrays = ['12TH']

        train = $("#train").val();
        destination = $("#destination").val();
        firstTime = $("#firstTime").val();
        frequency = $("#frequency").val();

        for (let i = 0; i < arrays.length; i++) {
            var rapid = `${arrays[i]}`
            var xhr = $.get(apis + querys + keys).done(function (xhr) {
                // console.log("success got data");
                var bartReply = xhr
                // console.log(bartReply)
                // console.log(`${bartReply}`)

                //if there are no announcements, it now says "none" instead of "undefined"
                if (typeof bartReply.root.bsa[0].type === "undefined") {
                    $("#Ares").append(`None`, "<br>")
                } else {
                    $("#Ares").append(`${bartReply.root.bsa[0].type}`, "<br>")
                }

                $("#Youz").append(`${bartReply.root.bsa[0].sms_text[`#cdata-section`]}`, "<br>")


            })
        }
    }

    //Start Bart Train Route Calls



    function getBartRoute(start, end) {

        var apiz = "http://api.bart.gov/api/etd.aspx";
        var queryz = "?cmd=etd&orig=";
        var keyz = "&key=" + bartRouteAPI + "&json=y";
        let arrayz = ['12TH', '16TH', '19TH', '24TH', 'ANTC', 'ASHB', 'BALB', 'BAYF', 'CAST', 'CIVC', 'COLS', 'COLM', 'CONC', 'DALY', 'DBRK', 'DUBL', 'DELN', 'PLZA', 'EMBR', 'FRMT', 'FTVL', 'GLEN', 'HAYW', 'LAFY', 'LAKE', 'MCAR', 'MLBR', 'MONT', 'NBRK', 'NCON', 'OAKL', 'ORIN', 'PITT', 'PCTR', 'PHIL', 'POWL', 'RICH', 'ROCK', 'SBRN', 'SFIA', 'SANL', 'SHAY', 'SSAN', 'UCTY', 'WCRK', 'WARM', 'WDUB', 'WOAK']

        train = $("#train").val();
        destination = $("#destination").val();
        firstTime = $("#firstTime").val();
        frequency = $("#frequency").val();


        // console.log("Button Clicked!")
        for (let i = 0; i < arrayz.length; i++) {
            var rapid = `${arrayz[i]}`
            var xhr = $.get(apiz + queryz + rapid + keyz).done(function (xhr) {
                // console.log("success got data");
                var bartReply = xhr
                console.log(bartReply.root.station[0].name)
        
                if (bartReply.root.station[0].name === start) {
                    console.log(bartReply);
                    
                    for (let k = 0; k < bartReply.root.station[0].etd.length; k++) {
                        for (let j = 0; j < bartReply.root.station[0].etd[k].estimate.length; j++) {

                            // console.log("k max", bartReply.root.station[0].etd.length);
                            // console.log("j max", bartReply.root.station[0].etd.length);

                            if (bartReply.root.station[0].etd[k].estimate[j].direction === end) {

                                console.log("k", k, "j", j)
                                console.log("hello there!", bartReply.root.station[0].etd[k].estimate[j])
                                

                                var row = $("<tr>");
                                row.append($("<td>").text(bartReply.root.station[0].name).css("color", bartReply.root.station[0].etd[k].estimate[j].hexcolor))
                                row.append($("<td>").text(bartReply.root.station[0].etd[k].destination).css("color", bartReply.root.station[0].etd[k].estimate[j].hexcolor))
                                row.append($("<td>").text(bartReply.root.station[0].etd[k].estimate[j].minutes).css("color", bartReply.root.station[0].etd[k].estimate[j].hexcolor))
                            
                                $("#table").append(row);
                            }

                        }
                    } 

                    // var row0 = $("<tr>");
                    // row0.append($("<td>").text(bartReply.root.station[0].name))
                    // row0.append($("<td>").text(bartReply.root.station[0].etd[0].destination))
                    // row0.append($("<td>").text(bartReply.root.station[0].etd[0].estimate[0].minutes))
                
                    // $("#table").append(row0);

                    // var row1 = $("<tr>");
                    // row1.append($("<td>").text(bartReply.root.station[0].name))
                    // row1.append($("<td>").text(bartReply.root.station[0].etd[0].destination))
                    // row1.append($("<td>").text(bartReply.root.station[0].etd[0].estimate[1].minutes))
                
                    // $("#table").append(row1);

                    // var row2 = $("<tr>");
                    // row2.append($("<td>").text(bartReply.root.station[0].name))
                    // row2.append($("<td>").text(bartReply.root.station[0].etd[0].destination))
                    // row2.append($("<td>").text(bartReply.root.station[0].etd[0].estimate[2].minutes))
                
                    // $("#table").append(row2);
                }
            // end mine


                //jeff below
                // $("#Yous").append(`${bartReply.root.station[0].name}`, "<br>")
                // $("#Arez").append(`${bartReply.root.station[0].etd[0].destination}`, "<br>")
                // $("#Thez").append(`${bartReply.root.station[0].etd[0].estimate[0].direction}`, "<br>")
                // $("#Bestz").append(`${bartReply.root.station[0].etd[0].estimate[0].minutes}`, "<br>")
                // $("#Trainz").append(`${bartReply.root.station[0].etd[0].destination}`, "<br>")



            })
        }

    }



    // START API CALLS BELOW
    // if the user has the local storage items we've given them...
    if (localStorage.getItem("name") && localStorage.getItem("email")) {

        console.log("local Name", localStorage.getItem("name"))
        console.log("local Email", localStorage.getItem("email"))
        

        //...then we search our firebase for a corresponding email, then look at the associated user object
        database.ref('/users').orderByChild('email').equalTo(localStorage.getItem("email")).on("value",snapshot => {
            console.log('snapshot.val()', snapshot.val());
            //we do something to each key in object
            snapshot.forEach(function (data) {
                console.log("data.key", data.key);
                console.log("snapshot.val()[data.key].name", snapshot.val()[data.key].name);
                console.log("snapshot.val()[data.key].city", snapshot.val()[data.key].city);

                //makes AJAX call to run api.  TODO: Add the other api calls here
                $("#user-name-header").append(snapshot.val()[data.key].name)

                getWeather(snapshot.val()[data.key].city);
                getNews("Sports", "Arts", "World");
                getStock();
                getBSA();
                getBartRoute(snapshot.val()[data.key].bartStart, snapshot.val()[data.key].bartEnd);


            });
        })
    } else {
        setTimeout(function() {window.location = 'entry-page.html'; }, 4000);
        Swal.fire("We're sorry!", "It looks need to register or sign back in.  We'll take you back so you can do so...", "error");

    }
    // END API CALLS

})