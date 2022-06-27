const express = require('express');
const app = express();

app.use(express.static("Public"));

app.get('/', function(req, res){
  res.sendFile(__dirname + '/home.html');
})

app.get('/simonGame', function(req, res){
  res.sendFile(__dirname + '/simonGame.html');
})

app.get('/drumKit', function(req, res){
  res.sendFile(__dirname + '/drumKit.html');
})

app.get('/diceChallenge', function(req, res){
  res.sendFile(__dirname + '/diceChallenge.html');
})

app.listen(process.env.PORT || 100, function(){
  console.log("Server created at port 100.");
})
