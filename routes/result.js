const express = require('express'),
      router  = express.Router(),
      school = require('../services/schoolService'),
      model = require('../models'),
      valid = require('../services/validators/resultValidator');


router.route('/')
.get(function(req,res){
    school.listResult(req.query.cosId,function(data){
        res.json(data);
    })
})
.post(valid.addResultValidator,function(req,res){
    school.addResult(req.body,function(data){
        res.json(data);
    })
})
.delete(valid.delResultValidator,function(req,res){
    school.delResult(req.query.id,function(data){
        res.json(data);
    })
})
.patch(valid.updateResultValidator,function(req,res){
    school.updateResult(req.query.id,req.body,function(data){
        res.json(data);
    })
})


module.exports = router;