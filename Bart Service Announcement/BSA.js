var api = "http://api.bart.gov/api/bsa.aspx";
var query = "?cmd=bsa";
var key = "&key=MW9S-E7SL-26DU-VV8V&json=y";
let array = ['12TH']


$("#search").on('click', function (event) {
    event.preventDefault();

    train = $("#train").val();
    destination = $("#destination").val();
    firstTime = $("#firstTime").val();
    frequency = $("#frequency").val();


    console.log("Button Clicked!")
    for (let i = 0; i < array.length; i++) {
        var rapid = `${array[i]}`
        var xhr = $.get(api + query + key).done(function (xhr) {
            console.log("success got data");
            var bartReply = xhr
            console.log(bartReply)
            // console.log(`${bartReply}`)

                $("#Are").append(`${bartReply.root.bsa[0].type}`, "<br>")
                $("#You").append(`${bartReply.root.bsa[0].sms_text[`#cdata-section`]}`, "<br>")



        })
    }



});