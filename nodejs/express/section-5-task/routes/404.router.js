const express = require('express')

const router = express.Router();


router.use('/',(req,res,next) =>{
    res.send('<html> <h1> 4-4 : page not found </h1> </html>')
})

module.exports = router;
