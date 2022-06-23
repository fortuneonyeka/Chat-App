// const io = require('socket.io')(3001)

// io.on('connection', socket => {
//   socket.emit('chat-message', 'Hello, you are welcome')
// })

const users = {}
const io = require('socket.io')(8000)

io.on('connection', socket=> {
  socket.on("new-user", name => {
    users[socket.id] = name
    socket.broadcast.emit('user-connected', name)
  })
  socket.on('send-chart-message', message => {
    socket.broadcast.emit('chart-message', {message: message, name: users[socket.id] })
  })
})