const express=require('express')
const { saveOrder } = require('../controllers/OrderController')
const router=express.Router()

router.post('/',saveOrder)

module.exports=router;