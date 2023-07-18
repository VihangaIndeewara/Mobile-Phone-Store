const express=require('express')
const router=express.Router();
const CustomerController=require('../controllers/CustomerController')

router.route('/customer')
.post(CustomerController.saveCustomer)
.get(CustomerController.getCustomer)

module.exports=router;

