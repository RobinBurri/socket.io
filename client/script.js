const joinRoomButton = document.getElementById("room-button");
const messageInuput = document.getElementById("message-input");
const roomInput = document.getElementById("room-input");
const form = document.getElementById("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const message = messageInuput.value;
  const room = roomInput.value;

  if (message.trim() === "") return;
  displayMessage(message);
  messageInuput.value = "";
});

joinRoomButton.addEventListener("click", (e) => {
  e.preventDefault();
  const room = roomInput.value;
});

const displayMessage = (message) => {
  const div = document.createElement("div");
  div.textContent = message;
  document.getElementById("message-container").appendChild(div);
};
