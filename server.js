const io = require('socket.io')(30001)

io.on('connection', socket => {
  socket.emit('chat-message', 'Hello, you are welcome')
})