var express = require("express");
var app = express();
var server = process.env.PORT||3000;

app.use(express.static("public"));

console.log("my socket server is running");

var socket = require('socket.io');

var io = socket(server);

io.sockets.on('connection', newConnection);

function newConnection(socket)
{
	console.log('new connection: ' + socket.id);

	socket.on("info", drawM);
	
	function drawM(data)
	{
		socket.broadcast.emit("info",data);
		

	}
	

}

	setInterval(repeat,100);
	
	

function repeat()
{
console.log("test");
}
