const express=require("express");
const app=express();

app.get("/ab+c",(req,res)=>{
    res.send("abc page");
})

app.get("/user/",(req,res)=>{
    res.send("user information git successfully !");
})

app.post("/user",(req,res)=>{
    res.send("user information post successfully !")
})

app.use("/",(req,res)=>{
    res.send("hello world !");
})

app.use("/hema",(req,res)=>{
    res.send("hello Hema ! ")
})

app.listen(3000,()=>{
    console.log("server is running ....");
})