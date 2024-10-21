import express from "express";
const app=express();
const port=3000;
app.get("/",(req,res)=>{
    //console.log(req);
   // console.log(req.rawHeaders);
   res.send("<h1>Hello!!</h1>")
});
app.get("/contact",(req,res)=>{
    res.send("<h1>Contact Me</h1><p>My number:9618191344<p>")
});
app.get("/about",(req,res)=>{
    res.send("<h1>About Me</h1><p>i am a great person.</p>")
});
app.listen(port,()=>{
    console.log(`Server running on port ${port}.`)
});