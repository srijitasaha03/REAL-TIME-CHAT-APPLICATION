# Real-Time Chat Application

This is a real-time chat application built using React.js for the client-side and Node.js with Socket.IO for the server-side. The application supports group chat functionality and includes typing indicators to enhance user experience.

## Server Setup

### Prerequisites
- Node.js
- npm

### Installation
1. Navigate to the server directory:
   ```
   cd server
   ```
2. Install the required dependencies:
   ```
   npm install
   ```

### Running the Server
To start the server, run the following command:
```
npm start
```
The server will be running on `http://localhost:5000` by default.

### Socket.IO Configuration
The server uses Socket.IO to handle real-time communication. The main logic for handling socket events is located in `src/socket.js`.

### API Endpoints
The server currently does not expose any RESTful API endpoints, as it primarily communicates through WebSocket events.

### Additional Notes
- Ensure that the client application is running simultaneously to test the chat functionality.
- You can customize the server settings and Socket.IO configurations in `src/index.js` and `src/socket.js` as needed.