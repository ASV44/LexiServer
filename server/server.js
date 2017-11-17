import config from './config'
import DatabaseProvider from './databaseProvider'

export default class Server {
  constructor(app) {
    this.app = app
    this.createBasicRoute()
    this.start()

    this.db = new DatabaseProvider()
    this.app.use('/api/v1/db', this.db.router)
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
