import config from './config'

export default class Server {
  constructor(app) {
    this.app = app
    this.createBasicRoute()
    this.start()
  }

  start() {
    this.app.listen(config.port, () => {
      console.log('Application is running on port ' + config.port)
    })
  }

  createBasicRoute() {
    this.app.get('/api/v1', (req, res)=> {
      res.send('Hi, this is the Lexi Server')
    })
  }
}