const express = require('express')
const cors = require('cors')
require('dotenv').config()
const {dbConnection} = require('./infraestructura/databases/Connection')

const app = express()
dbConnection()

app.use(cors("*"))
app.listen(process.env.PORT, () =>{
    console.log(`Server run in port ${process.env.PORT}`);
})