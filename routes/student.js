const express = require('express');
const router = express.Router();
const student  = require('../services/studentService');
const valid = require('../services/validators/registerValidator');
const cosValid = require('../services/validators/courseValidator');


router.route('/').get(function(req,res){
    res.json({amara : 'She is mopping at the system'});
});

router.route('/std/:id')
.get(function(req,res){
    student.getStudent(req.params.id,function(user){
        res.json(user);
    })
});

router.route('/std')
.post(valid.regValidator,function(req,res){
    student.addStudent(req.body,function(data){
        res.json(data);
    })
})
.delete(valid.stddelValidator,function(req,res){
    student.removeStudent(req.query.id,function(data){
        res.json(data);
    })
})
.get(valid.stdListvalidator,function(req,res){
    student.listStudent({level : req.query.level},function(data){
        res.json(data);
    })
})
.patch(valid.stdUpdValidator,function(req,res){
    student.updateStd(req.body,function(data){
            res.json(data);
    })
});

router.route('/enroll')
.post(cosValid.enrollValidator,function(req,res){
    student.enrollCos(req.body.stdId,req.body.cosIds,function(data){
        res.json(data)
    })
})
.get(cosValid.enrollmentValidator,function(req,res){
    student.getEnrollments(req.query.cosId,function(data){
        res.json(data);
    })
})


module.exports = router;