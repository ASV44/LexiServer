import mysql from 'mysql'
import config from './config'
import express from 'express'
import uuid from 'uuid/v1'

export default class DatabaseProvider {
  constructor() {
    this.connection = mysql.createConnection({
      host     : config.storageConfig.mysql.host,
      user     : config.storageConfig.mysql.user,
      password : config.storageConfig.mysql.password
    })

    this.connection.connect((err) => {
      if (err) throw err
      console.log('Database is Connected!')
      this.connection.query("CREATE DATABASE IF NOT EXISTS lexi_DB", (err, result) => {
        if (err) throw err;
        //console.log("Database created");
      })
      this.connection.query("Use lexi_DB")

      var query = "CREATE TABLE IF NOT EXISTS requests (id VARCHAR(36) PRIMARY KEY, user_ip VARCHAR(255), date datetime NOT NULL)";
      this.connection.query(query, (err, result) => {
        if (err) throw err;
      });
    })

    this.router = express.Router()
    this.createBasicRoute()
  }

  createBasicRoute() {
    this.router.get('/test', (req, res)=> {
      this.getRegisteredRequests((result) => {
        res.send(result)
      })

      this.registerRequest(req.ip)
    })
  }

  getRegisteredRequests(callback) {
    this.connection.query("SELECT * FROM requests", (err, result) => {
      if (err) throw err;
      callback(result)
      //console.log(result);
    })
  }

  registerRequest(user_ip) {
    let requestData = {
      id: uuid(),
      user_ip: user_ip,
      date: new Date().toISOString().slice(0, 19).replace('T', ' ')
    }
    let query = "INSERT INTO requests SET ?";
    this.connection.query(query, requestData, (err, result) => {
      if (err) throw err;
        //console.log("1 record inserted");
    });
  }
}
