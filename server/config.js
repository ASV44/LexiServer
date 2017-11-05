let fs = require('fs'),
configPath = __dirname + '/config.json';
let parsed = JSON.parse(fs.readFileSync(configPath, 'UTF-8'));

export default {
  port: process.env.PORT || 8000,
  storageConfig: parsed
}
