const messageForm = document.getElementById("send-container")
const messageInput = document.getElementById("message-input")
const messageContainer = document.getElementById("message-container")


const appendMessage = (message) => {
  const messageElement  = document.createElement("div")
  messageElement.innerText = message
  messageContainer.append(messageElement)
}

const socket = io('http://localhost:8000')

socket.on('chart-message', data => {
  appendMessage(data)
})


messageForm.addEventListener("submit", e => {
  e.preventDefault()
  const message = messageInput.value
  socket.emit("send-chart-message", message)
  messageInput.value = ""
})


