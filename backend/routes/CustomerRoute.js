const express=require('express')
const router=express.Router();
const {saveCustomer,getAllCustomers, updateCustomer,deleteCustomer, getCustomerDetails}=require('../controllers/CustomerController')


router.post('/',saveCustomer);
router.get('/',getAllCustomers);
router.put('/',updateCustomer);
router.delete('/:cusId',deleteCustomer)

router.get('/:cusId',getCustomerDetails)


module.exports=router;

