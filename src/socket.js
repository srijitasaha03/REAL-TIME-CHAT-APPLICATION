const handleSocketEvents = (io) => {
    const users = {};

    io.on('connection', (socket) => {
        console.log('A user connected: ' + socket.id);

        socket.on('join', (username) => {
            users[socket.id] = username;
            socket.broadcast.emit('userJoined', username);
            io.emit('updateUserList', Object.values(users));
        });

        socket.on('sendMessage', (message) => {
            io.emit('receiveMessage', {
                message,
                username: users[socket.id],
            });
        });

        socket.on('typing', () => {
            socket.broadcast.emit('typing', users[socket.id]);
        });

        socket.on('stopTyping', () => {
            socket.broadcast.emit('stopTyping', users[socket.id]);
        });

        socket.on('disconnect', () => {
            console.log('User disconnected: ' + socket.id);
            const username = users[socket.id];
            delete users[socket.id];
            socket.broadcast.emit('userLeft', username);
            io.emit('updateUserList', Object.values(users));
        });
    });
};

module.exports = handleSocketEvents;