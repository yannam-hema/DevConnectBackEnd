const express=require("express");
const app=express();
app.use("/hema",(req,res)=>{
    res.send("hello Hema ! ")
})
app.listen(3000,()=>{
    console.log("server is running ....");
})