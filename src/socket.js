const { Server } = require('socket.io');

module.exports = (server) => {
    const io = new Server(server);
    console.log('Socket.io server running');

    // Manipulação de conexões de socket.io
    io.on('connection', socket => {
        console.log('New WebSocket connection');
        socket.on('join-room', (roomId, userId) => {
            socket.join(roomId);
            console.log(roomId);
            console.log(userId);

            socket.broadcast.to(roomId).emit('user-connected', userId);

            socket.on('disconnect', () => {
                socket.broadcast.to(roomId).emit('user-disconnected', userId);
            });
        });
    });
};
