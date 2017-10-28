const express = require('express');
const router = express.Router();
const user = require('../services/userService');
const school = require('../services/schoolService');
const validator = require('../services/validators/registerValidator');
router.route('/').get(function(req,res){
    res.send({message : 'This is the root api'})
})

router.route('/activate').get(function(req,res){
    user.activateStudent(req.query.stdId,function(data){
        res.json(data);
    })
});

router.route('/admins')
.get(function(req,res){
    user.getAdmins(function(data){
        res.json(data);
    })
})
.post(validator.regAdminValidator,function(req,res){
    user.registerAdmin(req.body,function(data){
        res.json(data);
    })
});
router.route('/getFac').get(function(req,res){
    school.getFaculties(function(data){
        res.json(data);
    })
});

router.route('/getDept').get(function(req,res){
    school.getDepartments(req.query.facId,function(data){
        res.json(data);
    })
})
router.route('/getCos').get(function(req,res){
    school.getCourses(function(data){
        res.json(data);
    })
});
router.route('/getCosByDept/:deptId').get(function(req,res){
    school.getCoursesByDeptId(req.params.deptId,function(data){
        res.json(data);
    })
})
module.exports = router;