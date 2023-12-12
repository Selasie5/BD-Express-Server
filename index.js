const express= require('express');
const app = express();
const port = 8080
//Starting Express Server
app.get('/',(req, res)=>{
    res.send("Hello World")
})
app.listen(port, ()=>{
    console.log('Server Started')
})