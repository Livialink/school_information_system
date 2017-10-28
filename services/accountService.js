const repo = require('../repositories/repository_factory');
const passport = require("passport");  
const passportJWT = require("passport-jwt"); 
const jwt = require('jsonwebtoken');

const ExtractJwt = passportJWT.ExtractJwt;  
const  JWTStrategy = passportJWT.Strategy;  

const cfg = require("../config.js");  


passport.use(new JWTStrategy({  
    secretOrKey: cfg.jwtSecret,
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    ignoreExpiration : true
}, function(payload, done) {
       passportauth.jwtStrategyFnParam(payload,done);
 }));


let passportauth = {
    initialize : function(){
        return passport.initialize();
    },

    jwtStrategyFnParam : function(payload,done){
        let user =  payload || null;
        if (user) {
            return done(null, {
                id: payload.id,
                username : payload.username,
                name : payload.name,
                role : payload.role
            });
        } else {
            return done(new Error("User not found"), null);
        }
    }
    ,
    authenticate : function(){
        return passport.authenticate('jwt',{session : false});
    },    

    authenticatepwduser : function(req,res){
        if(req.body.username && req.body.password){
            let username = req.body.username;
            let password = req.body.password;
            
            repo.user.login(username,password,function(err,user){
                if(user !== false){
                    let token = jwt.sign({
                        id : user.user.id,
                        username : user.user.username,
                        name : user.user.firstname + ' '+ user.user.lastname,
                        exp : Math.floor(new Date()/1000) + (60*60),
                        role : user.role },cfg.jwtSecret);
                    res.json({token : token});
                }else{
                res.status(401).send({message : 'Invalid credentials'});
                }
            });
        }else{
            res.status(401).send({message : 'Invalid credentials'});
        }
    },
    
    authorizeAdmin : function(req,res,next){
        if(req.user.role !== 'admin'){
            res.status(401).send({message : 'Unauthorized access'});
        }else{
            next();
        }
    }
    ,
    authorizeUser : function(req,res,next){
        if(req.user.role !== 'user'){
            res.status(401).send({message : 'Unauthorized access'});
        }else{
            next();
        }
    }
};
//passportauth.initialize();
exports.authenticatepwduser = passportauth.authenticatepwduser;

exports.authorizeAdm = [passportauth.authenticate(),passportauth.authorizeAdmin];
exports.authorizeUser = [passportauth.authenticate(),passportauth.authorizeUser];