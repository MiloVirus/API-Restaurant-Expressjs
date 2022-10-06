const express = require('express')

class Server
{
    constructor() 
    {
        this.app = express()
        this.routes()
        this.port = process.env.PORT
    }

    routes() 
    {
       this.app.use('/api/dishes', require('../routes/dish.routes'))
    }

    middlewares()
    {
        //Public directory 
        this.app.use(express.static('public'))
        this.app.use(cors())
    }

    listen()
    {
        this.app.listen(this.port, () =>
        {
            console.log(`running on port ${this.port}`)
        })
    }
}

module.exports = Server