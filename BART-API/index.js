/*
 *   BART Marquee
 *
 *
 */

 //Global Requirements
var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);

 //Bart Modules
 var bart = require("./bartjs/bartClient");


 //App Entry point
var port = 3000;
server.listen(port, function () {
  console.log('Server listening at port %d', port);
});

// Express Routing
app.use(express.static(__dirname + '/site'));


io.on('connection', function (socket) {

  socket.emit("etd", {found: "Connected to BartChat!"});

});

//Initiate BART Client
var bartClient = new bart.bartClient();
bartClient.on("etd", function(result) {
  console.dir(result.root);
  stations = result.root.station;
  for (obj in stations) {
    stationName = stations[obj]["name"][0];
    console.log(stations[obj]["name"][0]);
    etds = stations[obj]["etd"];
    for (dest in etds) {
      console.log(etds[dest]["destination"]);
      est = etds[dest]["estimate"];
      if (est[0]["minutes"] == "Leaving") {
        resp = etds[dest]["destination"] + " train is leaving the " + stationName + " station now!";
        io.emit("etd", { found: resp});
      }
      for (times in est) {
        console.log(est[times]["minutes"])

      }
    }

  }
});
setInterval(function() { bartClient.getETD('all') }, 60000);
