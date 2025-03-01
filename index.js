require('dotenv').config();
const server = require('./src/server');
const socket = require('./src/socket');

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

socket(server);