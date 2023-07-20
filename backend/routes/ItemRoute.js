const express=require('express')

const { saveItem ,getAllItems, updateItem } = require('../controllers/ItemController')
const router=express.Router()

router.post('/',saveItem)
router.get('/',getAllItems)
router.put('/',updateItem)

module.exports=router;