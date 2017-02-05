var socket = io();

	socket.on('connect', function () {
		console.log('Connected to server');

		socket.emit('createMessage', {
			to: 'Rajesh',
			text: 'Hey bro, you there??'
		});
	});


	socket.on('newMessage', function(message) {
		console.log(message)
	});
 
	socket.on('disconnect', function () {
		console.log('Disconnected from server');
	});


	