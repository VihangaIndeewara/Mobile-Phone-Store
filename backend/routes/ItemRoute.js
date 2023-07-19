const express=require('express')
const { saveItem ,getAllItems} = require('../controllers/ItemController')
const router=express.Router()

router.post('/',saveItem)
router.get('/',getAllItems)

module.exports=router