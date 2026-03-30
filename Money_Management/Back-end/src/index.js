require("dotenv").config();
const http = require('http');
const app = require('./app');
const connectDB = require("./db/dbConnection");

const PORT = process.env.PORT


const server = http.createServer(app);

connectDB()

server.listen(PORT, ()=>{
    console.log(`Listening to port ${PORT}`);
})
