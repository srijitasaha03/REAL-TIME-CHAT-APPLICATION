import React, { useState, useEffect } from 'react';
import { useSocket } from '../context/SocketContext';
import MessageList from './MessageList';
import TypingIndicator from './TypingIndicator';

const ChatBox = () => {
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);
    const [typingUsers, setTypingUsers] = useState([]);
    const socket = useSocket(); // ✅ Correct usage

    useEffect(() => {
        if (!socket) return;

        socket.on('receiveMessage', (newMessage) => {
            setMessages((prevMessages) => [...prevMessages, newMessage]);
        });

        socket.on('typing', (user) => {
            setTypingUsers((prevUsers) => [...prevUsers, user]);
        });

        socket.on('stopTyping', (user) => {
            setTypingUsers((prevUsers) => prevUsers.filter((u) => u !== user));
        });

        return () => {
            socket.off('receiveMessage');
            socket.off('typing');
            socket.off('stopTyping');
        };
    }, [socket]);

    const handleSendMessage = (e) => {
        e.preventDefault();
        if (message.trim()) {
            socket.emit('sendMessage', message);
            setMessage('');
        }
    };

    const handleTyping = () => {
        socket.emit('typing');
    };

    const handleStopTyping = () => {
        socket.emit('stopTyping');
    };

    return (
        <div className="chat-box">
            <MessageList messages={messages} />
            <TypingIndicator typingUsers={typingUsers} />
            <form onSubmit={handleSendMessage}>
                <input
                    type="text"
                    value={message}
                    onChange={(e) => {
                        setMessage(e.target.value);
                        handleTyping();
                    }}
                    onBlur={handleStopTyping}
                    placeholder="Type your message..."
                />
                <button type="submit">Send</button>
            </form>
        </div>
    );
};

export default ChatBox;
