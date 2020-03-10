const express = require("express");
const app = express();
app.engine('html', require('ejs').renderFile);
app.use(express.static("public"));

//routes
app.get("/", function(req, res){
    res.render('../views/index.html');
});
app.get("/mercury", function(req, res){
    res.render('../views/mercury.html');
});
app.get("/venus", function(req, res){
    res.render('../views/venus.html');
});

//server listener

app.listen(process.env.PORT, process.env.IP, function(){
   console.log("Running Express Server..."); 
});