const express=require('express')

const { saveItem ,getAllItems, updateItem, deleteItem, getItemDetails } = require('../controllers/ItemController')
const router=express.Router()

router.post('/',saveItem)
router.get('/',getAllItems)
router.put('/',updateItem)
router.delete('/:itemId',deleteItem)

router.get('/:itemId',getItemDetails)

module.exports=router;