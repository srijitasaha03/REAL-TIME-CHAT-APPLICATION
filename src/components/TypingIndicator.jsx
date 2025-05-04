import React from 'react';
import { useSocket } from '../context/SocketContext';

const TypingIndicator = () => {
    const { typingUsers } = useSocket();

    return (
        <div>
            {typingUsers.length > 0 && (
                <p>{typingUsers.join(', ')} {typingUsers.length > 1 ? 'are' : 'is'} typing...</p>
            )}
        </div>
    );
};

export default TypingIndicator;