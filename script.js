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
appendMessage("You Joined")
socket.emit("new-user", name)

socket.on('chart-message', data => {
  appendMessage(`${data.name}: ${data.message}`)
})

socket.on('user-connected', name => {
  appendMessage(`${name} connected`)
})


messageForm.addEventListener("submit", e => {
  e.preventDefault()
  const message = messageInput.value
  socket.emit("send-chart-message", message)
  messageInput.value = ""
})


