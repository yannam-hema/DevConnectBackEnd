const express=require("express");
const app=express();


//every syntax is some an same while handling requests
// app.use("/something",rh1,rh2,rh3,rh4);
// app.use("/something",[rh1,rh2,rh3,rh4]);
// app.use("/something",[rh1,rh2],rh3,rh4);

app.get("/a",(req,res,next)=>{
   // res.send("abc page");
   console.log("zero")
    next();
},
(req,res,next)=>{
    console.log("one");
    next();
},
(req,res)=>{
    console.log("two");
    res.send("yeah!! got it ")
}
)


app.listen(3000,()=>{
    console.log("server is running ....");
})