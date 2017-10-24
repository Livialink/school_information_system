const express = require('express'),
      path = require('path'),
      favicon = require('serve-favicon'),
      logger = require('morgan'), 
      cookieParser = require('cookie-parser'),
      bodyParser = require('body-parser'),
      model = require('./models'),
      app = express(),
      authorize  = require('./services/accountService');
//Routes
const authR = require('./routes/auth'),
      studentR = require('./routes/student'),
      userR = require('./routes/user'),
      resultR = require('./routes/result');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/token',authR);
app.use('/api/student',authorize.authorizeAdm,studentR);
app.use('/api/user',authorize.authorizeUser,userR);
app.use('/api/result',authorize.authorizeUser,resultR);

app.use('*',(req,res)=>{
  res.sendFile(path.join(__dirname + '/api_client/index.html'));
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {


  if(err.isBoom){
    return res.status(err.output.statusCode).json(err.output.payload)
  }
  
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.send(err);
  
});

//uncomment for the initial migration
//model.sequelize.sync({force : true});

module.exports = app;
