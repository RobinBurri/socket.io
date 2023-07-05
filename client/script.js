import { io } from "socket.io-client";

const joinRoomButton = document.getElementById("room-button");
const messageInuput = document.getElementById("message-input");
const roomInput = document.getElementById("room-input");
const form = document.getElementById("form");

const socket = io("http://localhost:3000");
socket.on("connect", () => {
    displayMessage(`You connected with id: ${socket.id}`);
});
socket.on("received-msg", (message) => {
    displayMessage(message);
});

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const message = messageInuput.value;
    const room = roomInput.value;

    if (message.trim() === "") return;
    displayMessage(message);
    socket.emit("send-msg", message, room);
    messageInuput.value = "";
});

joinRoomButton.addEventListener("click", (e) => {
    e.preventDefault();
    const room = roomInput.value;
    socket.emit('join-room', room)
});

const displayMessage = (message) => {
    const div = document.createElement("div");
    div.textContent = message;
    document.getElementById("message-container").appendChild(div);
};
