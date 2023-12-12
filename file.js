const express=require('express')
const app =express();
const port =3005;
 app.get("/", (req,res)=>{
    res.sendFile(__dirname+ "/index.html")
 })
 //Serving a Static File
 app.use(express.static(__dirname+ "public"))
 //Listneing to the server
 app.listen(port,()=>{
    console.log('Server has been successfully lauched')
 })