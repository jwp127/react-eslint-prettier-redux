var express = require("express");
var cors = require("cors");
var app = express();

var data = {
  status: "200",
  msg: "success",
  data: [
    {
      userId: "1",
      userName: "xiaoming",
    },
    {
      userId: "2",
      userName: "xiaohuang",
    },
  ],
};

let whitelist = ["http://localhost:3000"];
let corsOptions = {
  origin: (origin, callback) => {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true,
};

app.get("/getUserInfo", cors(corsOptions), function(req, res, next) {
  // res.json({msg: "This is CORS-enabled for only example.com."});
  setTimeout(() => {
    res.end(JSON.stringify(data));
  }, 1000);
});

app.listen(8080, function() {
  console.log("CORS-enabled web server listening on port 8080");
});
