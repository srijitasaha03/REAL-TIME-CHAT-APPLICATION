import React from 'react';
import { SocketProvider } from './context/SocketContext';
import ChatBox from './components/ChatBox';
import MessageList from './components/MessageList';
import TypingIndicator from './components/TypingIndicator';
import UserList from './components/UserList';
import './styles/App.css';

const App = () => {
    return (
        <SocketProvider>
            <div className="app-container">
                <UserList />
                <MessageList />
                <TypingIndicator />
                <ChatBox />
            </div>
        </SocketProvider>
    );
};

export default App;