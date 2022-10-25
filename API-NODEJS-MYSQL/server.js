const express = require('express')
const mysql = require('mysql')
const myconn = require('express-myconnection')
const routes = require('./routes')
const cors = require('cors')
const app = express()


// inicializar

app.set('port', process.env.PORT || 9000)
const dbOptions = {
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '12345678',
    database: 'data'
}

//middlewares
app.use(myconn(mysql, dbOptions, 'single'))
app.use(express.json())
app.use(cors())

// rutas
app.get('/', (reg, res) => {
    res.send('API')
})
app.use('/API/Contacts', routes)

// server running
app.listen(app.get('port'), () => {
    console.log('server running on port', app.get('port'))
})