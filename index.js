const http=require("http");

const path=require('path');

const {Server}=require("socket.io");

const express=require('express');
const { Socket } = require("dgram");

const app=express();
const server=http.createServer(app);
const io=new Server(server);

io.on('connection',(socket)=>{
 console.log("a new user connected",socket.id);
})

app.use(express.static(path.resolve('./public')));
app.get('/',(req,res)=>{
    return res.sendFile("/public/index.httml");
})
server.listen(9000,()=>console.log(`server start at PORT:9000`))