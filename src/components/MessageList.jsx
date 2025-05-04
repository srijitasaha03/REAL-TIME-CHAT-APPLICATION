import React from 'react';
import { useSocket } from '../context/SocketContext';

const MessageList = () => {
    const { messages } = useSocket(); // ✅ Correct way to access messages

    return (
        <div className="message-list">
            {messages.map((message, index) => (
                <div key={index} className="message">
                    <strong>{message.user}</strong>: {message.text}
                </div>
            ))}
        </div>
    );
};

export default MessageList;
