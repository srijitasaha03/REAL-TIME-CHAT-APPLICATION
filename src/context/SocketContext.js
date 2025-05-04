import React, { createContext, useContext, useEffect, useState } from 'react';
import io from 'socket.io-client';

const SocketContext = createContext();

export const SocketProvider = ({ children }) => {
    const [socket] = useState(() => io(':3001')); // Adjust the port as necessary
    const [typing, setTyping] = useState(false);

    useEffect(() => {
        socket.on('typing', () => {
            setTyping(true);
            setTimeout(() => setTyping(false), 3000); // Typing indicator duration
        });

        return () => {
            socket.off('typing');
        };
    }, [socket]);

    return (
        <SocketContext.Provider value={{ socket, typing }}>
            {children}
        </SocketContext.Provider>
    );
};

export const useSocket = () => {
    return useContext(SocketContext);
};