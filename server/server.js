var express = require('express');
var app = express();
var http = require('http').Server(app);
var bodyParser = require('body-parser');

var path = require('path');
var cors = require('cors'); //import the cors package. 


// Sockets import

const io = require('socket.io')(http);
const PORT = 3000;


app.use(cors()); // Add cors middleware to the express application
app.use(bodyParser.json());




// app.use(express.static(__dirname + "../dist/firstTry/"));

app.post('/api/auth',require('./login.js'));


io.on('connection',(socket)=> 
{



// When message comes, send it back to all sockets
	socket.on('message',(message) =>
	{
		io.emit('message',message);
	}
	)
}
)


http.listen(PORT);