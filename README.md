# LexiServer
Back-end side of Lexi App

1. `npm run start`: `node bin/dev`
2. `npm run nodemon`: `nodemon bin/dev`
3. `npm run clean`: `rm -rf dist`
4. `npm run build`: `npm run clean && mkdir dist && babel server -s -d dist`,
5. `npm run production`: `npm run build && node bin/production`

This Project uses `MySQL` database. For installing it use
```npm install mysql``` .

In order to use database in a right way, create in `server` directory file
`config.json` which should contain
```
{
  "mysql": {
    "host"     : "localhost",
    "user"     : "your_database_user_name", // usually root
    "password" : "your_database_user_password"
  }
}
```
This will be your personal configuration of your database.
