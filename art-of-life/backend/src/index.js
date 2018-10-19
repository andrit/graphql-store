require('dotenv').config({ path: 'variables.env' });
const createServer = require('./createServer');
const db = require('./db');
const server = createServer();

//TODO use express middleware to handle  cvookies (jwt)
// TODO use express mw to pop curr user

server.start({
    cors: {
        credentials: true,
        origin: process.env.FRONTEND_URL,
    },
}, info => {
    console.log(`Server is now running on http://localhost:${info.port}`)
})