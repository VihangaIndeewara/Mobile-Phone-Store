const express=require('express')
const { saveOrder, getOrderId  } = require('../controllers/OrderController')
const router=express.Router()

router.get('/',getOrderId)
router.post('/',saveOrder)


module.exports=router;