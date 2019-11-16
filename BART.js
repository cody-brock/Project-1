
var api = "http://api.bart.gov/api/etd.aspx";
var query = "?cmd=etd&orig=";
var key = "&key=MW9S-E7SL-26DU-VV8V&json=y";
let array = ['12TH', '16TH', '19TH', '24TH', 'ANTC', 'ASHB', 'BALB', 'BAYF', 'CAST', 'CIVC', 'COLS', 'COLM', 'CONC', 'DALY', 'DBRK', 'DUBL', 'DELN', 'PLZA', 'EMBR', 'FRMT', 'FTVL', 'GLEN', 'HAYW', 'LAFY', 'LAKE', 'MCAR', 'MLBR', 'MONT', 'NBRK', 'NCON', 'OAKL', 'ORIN', 'PITT', 'PCTR', 'PHIL', 'POWL', 'RICH', 'ROCK', 'SBRN', 'SFIA', 'SANL', 'SHAY', 'SSAN', 'UCTY', 'WCRK', 'WARM', 'WDUB', 'WOAK']


$("#search").on('click', function (event) {
    event.preventDefault();

    train = $("#train").val();
    destination = $("#destination").val();
    firstTime = $("#firstTime").val();
    frequency = $("#frequency").val();

    
    console.log("Button Clicked!")
    for (let i = 0; i < array.length; i++) {
        var rapid = `${array[i]}`
        var xhr = $.get(api + query + rapid + key).done(function (xhr) {
            // console.log("success got data");
            var bartReply = xhr
            console.log(bartReply)
            console.log(`${bartReply.root.station[0].name}`)

            for (i in bartReply) {
                $("#You").append(`${bartReply.root.station[0].name}`, "<br>")
                $("#Are").append(`${bartReply.root.station[0].etd[0].destination}`, "<br>")
                $("#The").append(`${bartReply.root.station[0].etd[0].estimate[0].direction}`, "<br>")
                $("#Best").append(`${bartReply.root.station[0].etd[0].estimate[0].minutes}`, "<br>")
                $("#Train").append(`${bartReply.root.station[0].etd[0].destination}`, "<br>")

            }

        })
    }



});
