import React from 'react';
import { useSocket } from '../context/SocketContext';

const UserList = () => {
    const { users } = useSocket(); // ✅ Access users via custom hook

    return (
        <div className="user-list">
            <h2>Active Users</h2>
            <ul>
                {users.map((user, index) => (
                    <li key={index}>{user}</li>
                ))}
            </ul>
        </div>
    );
};

export default UserList;
