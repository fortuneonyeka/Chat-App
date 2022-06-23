const messageForm = document.getElementById("send-container")
const messageInput = document.getElementById("message-input")

const socket = io('http://localhost:8000')

socket.on('chart-message', data => {
  console.log(data);
})


messageForm.addEventListener("submit", e => {
  e.preventDefault()
  const message = messageInput.value
  socket.emit("send-chart-message", message)
  messageInput.value = ""
})