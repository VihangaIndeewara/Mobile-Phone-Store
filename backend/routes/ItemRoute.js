const express=require('express')

const { saveItem ,getAllItems, updateItem, deleteItem, getItemBrands } = require('../controllers/ItemController')
const router=express.Router()

router.post('/',saveItem)
router.get('/',getAllItems)
router.put('/',updateItem)
router.delete('/:itemId',deleteItem)


module.exports=router;