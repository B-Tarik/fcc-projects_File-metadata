'use strict';

const express = require('express');
const cors = require('cors');
const multer  = require('multer')

const storage = multer.memoryStorage()
const upload = multer({ 
  storage: storage,
  limits: { fileSize: 1 * 1024 * 1024 }
})

const app = express()

app.use(cors())

app.use(express.static('public'))

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.post('/api/fileanalyse', upload.single('upfile'), (req, res, next) => {
  
  if(req.file === undefined) next(new Error('No file chosen'))
  
  res.json({
    name : req.file.originalname,
    type : req.file.mimetype,
    size : -~(req.file.size/1024) + 'KB'
   });
})

// http://expressjs.com/en/starter/basic-routing.html
app.get("*", function(request, response) {
  response.sendFile(__dirname + '/views/index.html');
});

app.use((err, req, res, next) => {
  return res.status(err.status || 500).json({
    error: err.message || 'invalid URL'
  });
});

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
