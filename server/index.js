const express=require('express');
const server=express();
const bodyparser=require('body-parser');
const userRouter=require("./routes/user.js");
server.listen(5050,()=>{
    console.log('server is running');
});
server.use(bodyparser.urlencoded{extended:false});
server.use(express.static(__dirname+"/public"));





server.use('user',userRouter);