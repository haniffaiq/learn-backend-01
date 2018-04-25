const express = require('express')
const bodyParser = require('body-parser')
const app = express()
//router = controller
const router = require('./controller/controller.js')

app.use(bodyParser.json())
//handle req with route a.k.a controller
app.use('/api',router)
//handle req with express
app.get("/api", (req, res) =>{
    res.json({
        "post " : "/api/nama",
        "get" : "/api/nama"
    })
    res.end()
})
app.listen(3000, () =>{
    console.log("Server is running on port 3000");
})