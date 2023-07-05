const io = require("socket.io")(3000, {
    cors: {
        origin: ["http://localhost:8080"],
    },
});

io.on("connection", (socket) => {
    console.log(socket.id);
    socket.on("send-msg", (message, room) => {
        if (room === "") {
            // broadcast => to everyone except sender
            socket.broadcast.emit("received-msg", message);
        } else {
            // broadcast is included in to()
            socket.to(room).emit("received-msg", message);
        }
    });

    socket.on("join-room", (room, cb) => {
        socket.join(room);
        cb(`Joined ${room}`);
    });
});
