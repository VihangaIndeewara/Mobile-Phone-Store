const express=require('express');
const { checkLoginDetails } = require('../controllers/LoginController');
const router=express.Router();


router.post('/',checkLoginDetails)

module.exports=router;