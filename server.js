// server.js
// where your node app starts

// init project
require('dotenv').config();
var express = require('express');
var CircularJson = require('circular-json')
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
var cors = require('cors');
app.use(cors({ optionsSuccessStatus: 200 }));  // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function(req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


// your first API endpoint... 
app.get("/api/whoami", (req, res) => {
  console.log(Object.keys(req))
  console.log(req.ip, req.headers["user-agent"], req.headers["accept-language"])
  res.json({ "ipaddress": req.ip, "language": req.headers["accept-language"], "software": req.headers["user-agent"] });
})
app.get("/api/hello", function(req, res) {
  res.json({ greeting: 'hello API' });
});


//config
app.set("port", process.env.PORT || 3000)

// listen for requests :)
var listener = app.listen(app.get("port"), function() {
  console.log(`Your app is listening on port ${app.get("port")}`);
});
