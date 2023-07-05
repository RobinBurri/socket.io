const io = require("socket.io")(3000, {
    cors: {
        origin: ["http://localhost:8080"],
    },
});

io.on("connection", (socket) => {
    console.log(socket.id);
    socket.on("send-msg", (message) => {
      socket.broadcast.emit('received-msg', message)
        console.log(message);
    });
});
