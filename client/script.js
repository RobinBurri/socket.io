import { io } from "socket.io-client";

const joinRoomButton = document.getElementById("room-button");
const messageInuput = document.getElementById("message-input");
const roomInput = document.getElementById("room-input");
const form = document.getElementById("form");

const socket = io("http://localhost:3000");
socket.on("connect", () => {
    displayMessage(`You connected with id: ${socket.id}`);
});

// socket.emit('string', number, Object, Whatever you want)
socket.emit("custom-event", 10, "Hi", { a: "hello" });

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
