var api = "https://www.alphavantage.co";
var query1 = "/query?function=GLOBAL_QUOTE&symbol=DJI";
var query2 = "/query?function=GLOBAL_QUOTE&symbol=NDAQ";
var query3 = "/query?function=GLOBAL_QUOTE&symbol=GOOG";
var query4 = "/query?function=GLOBAL_QUOTE&symbol=FB";
var query5 = "/query?function=GLOBAL_QUOTE&symbol=AAPL";
var key = "&apikey=VKVZWYFG94UY892N&datatype=json";


$("#search").on('click', function (event) {
    event.preventDefault();

    console.log("Button Clicked!")
        var xhr = $.get(api + query1 + key).done(function (xhr) {
            console.log("success got data", JSON.stringify(xhr));
            var stockReply = xhr;
            console.log(stockReply)
                
                $("#You").append("Name: " + "DOW Jones", "<br>")
                $("#You").append("Symbol: " + `${stockReply['Global Quote']['01. symbol']}`, "<br>")
                $("#You").append("Price($): " + `${stockReply['Global Quote']['05. price']}`, "<br>")
                $("#You").append("Change: " + `${stockReply['Global Quote']['10. change percent']}`, "<br>", "<br>")
            })
            
            "<br>"  
            
        var xhr = $.get(api + query2 + key).done(function (xhr) {
            console.log("success got data");
            var stockReply = xhr
            console.log(stockReply)
                        
                $("#Are").append("Name: " + "NASDAQ", "<br>")
                $("#Are").append("Symbol: " + `${stockReply['Global Quote']['01. symbol']}`, "<br>")
                $("#Are").append("Price($): " + `${stockReply['Global Quote']['05. price']}`, "<br>")
                $("#Are").append("Change: " + `${stockReply['Global Quote']['10. change percent']}`, "<br>", "<br>")
                "<br>"  
        })


        var xhr = $.get(api + query3 + key).done(function (xhr) {
            console.log("success got data");
            var stockReply = xhr
            console.log(stockReply)
                        
                $("#The").append("Name: " + "Google", "<br>")
                $("#The").append("Symbol: " + `${stockReply['Global Quote']['01. symbol']}`, "<br>")
                $("#The").append("Price($): " + `${stockReply['Global Quote']['05. price']}`, "<br>")
                $("#The").append("Change: " + `${stockReply['Global Quote']['10. change percent']}`, "<br>", "<br>")
                "<br>"  
        })

        var xhr = $.get(api + query4 + key).done(function (xhr) {
            console.log("success got data");
            var stockReply = xhr
            console.log(stockReply)
                        
                $("#Best").append("Name: " + "Facebook", "<br>")
                $("#Best").append("Symbol: " + `${stockReply['Global Quote']['01. symbol']}`, "<br>")
                $("#Best").append("Price($): " + `${stockReply['Global Quote']['05. price']}`, "<br>")
                $("#Best").append("Change: " + `${stockReply['Global Quote']['10. change percent']}`, "<br>", "<br>")
                "<br>"  
        })

        var xhr = $.get(api + query5 + key).done(function (xhr) {
            console.log("success got data");
            var stockReply = xhr
            console.log(stockReply)
                        
                $("#Train").append("Name: " + "Apple", "<br>")
                $("#Train").append("Symbol: " + `${stockReply['Global Quote']['01. symbol']}`, "<br>")
                $("#Train").append("Price($): " + `${stockReply['Global Quote']['05. price']}`, "<br>")
                $("#Train").append("Change: " + `${stockReply['Global Quote']['10. change percent']}`, "<br>", "<br>")
                "<br>"  
        })

       


    
});