const express= require('express');
const app = express();
const port = 3001
// Starting Express Server
app.get('/',(req, res)=>{
    res.send("Hello People")
})
app.listen(port, ()=>{
    console.log('Server Started Successfully')
})

