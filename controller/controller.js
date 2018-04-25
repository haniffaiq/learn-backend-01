//controller untuk handle request
const express = require('express')
const router = express.Router()


router.get('/nama', (req, res) =>{
    console.log(req.body);
    res.json({
        "nama" : "Faiq",
        "kelas" : "12"
    })
})

router.post('/nama', (req, res) =>{
    console.log(req.body)
    res.json(req.body)
})




module.exports = router;