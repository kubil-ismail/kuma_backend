require('dotenv').config()
const { DB_HOST, DB_USER, DB_PASS, DB_NAME } = process.env
const mysql = require('mysql')

const connection = mysql.createConnection({
  host: DB_HOST,
  user: DB_USER,
  password: DB_PASS,
  database: DB_NAME
})

module.exports = connection
