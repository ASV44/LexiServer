const express = require('express'),
      app = express(),
      config = require('./config')


// app.use('/api/v1/upload', uploadImage)
app.get('/api/v1', (req, res)=> {
  res.send('Hi, this is the Lexi Server')
})

app.listen(config.port, () => {
  console.log('Application is running on port ' + config.port)
})
