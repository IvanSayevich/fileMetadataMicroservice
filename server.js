'use strict';

var express = require('express');
var cors = require('cors');
var formidable = require('formidable');
// require and use "multer"...

var app = express();



app.use(cors());
app.use('/public', express.static(process.cwd() + '/public'));

app.get('/', function (req, res) {
     res.sendFile(process.cwd() + '/views/index.html');
  });

app.get('/hello', function(req, res){
  res.json({greetings: "Hello, API"});
});

app.post('/api/fileanalyse', function(req, res){
  var form = new formidable.IncomingForm();
  form.parse(req, function (err, fields, files) {
      console.log(files.upfile.name);
      res.json({name:files.upfile.name,type:files.upfile.type,size: files.upfile.size});
    });
});
app.listen(process.env.PORT || 3000, function () {
  console.log('Node.js listening ...');
});
