// const io = require('socket.io')(3001)

// io.on('connection', socket => {
//   socket.emit('chat-message', 'Hello, you are welcome')
// })


const io = require('socket.io')(8000)

io.on('connection', socket=> {
  socket.on('send-chart-message', message => {
    socket.broadcast.emit('chart-message', message)
  })
})