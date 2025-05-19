const net = require('net');

const LOCAL_PORT = process.env.PORT || 25565;  // Railway port (you must confirm)
const REMOTE_HOST = '45.143.196.191';          // Minecraft server IP
const REMOTE_PORT = 25565;                      // Minecraft server port

const server = net.createServer(clientSocket => {
  const serverSocket = net.createConnection({ host: REMOTE_HOST, port: REMOTE_PORT });

  clientSocket.pipe(serverSocket);
  serverSocket.pipe(clientSocket);

  clientSocket.on('error', () => serverSocket.end());
  serverSocket.on('error', () => clientSocket.end());
});

server.listen(LOCAL_PORT, () => {
  console.log(`TCP proxy running on port ${LOCAL_PORT}`);
});
