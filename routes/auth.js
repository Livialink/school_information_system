const express = require('express');
const router = express.Router();
const authorize  = require('../services/accountService');
const  validator = require('../services/validators/loginValidator');

/* GET home page. */
//router.route('/').get((req,res)=> res.json({message : 'The web api root'}))
router.route('/')
.post(validator,authorize.authenticatepwduser)
.get((req,res)=>{ res.json({message: 'use post HTTP method to login'})});

module.exports = router;
