const messageForm = document.getElementById("send-container")
const messageInput = document.getElementById("message-input")
const messageContainer = document.getElementById("message-container")





function appendMessage (message) {
  const messageElement  = document.createElement("div")
  messageElement.innerText = message
  messageContainer.append(messageElement)
}

const socket = io('http://localhost:8000')
const name = prompt("What is your Name?")
appendMessage(`${name} You joined`)
socket.emit("new-user", name)

socket.on('chart-message', data => {
  appendMessage(`${data.name}: ${data.message}`)
})

socket.on('user-connected', name => {
  appendMessage(`${name} Joined the chat`)
})

socket.on('user-disconnected', name => {
  appendMessage(`${name} left the chat`)
})


messageForm.addEventListener("submit", e => {
  e.preventDefault()
  const message = messageInput.value
  appendMessage(`You: ${message}`)

  socket.emit("send-chart-message", message)
  messageInput.value = ""
})


