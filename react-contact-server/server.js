const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const config = require('./config')
const contact = require('./contacts')

const app = express()

app.use(express.static('public'))
app.use(crs())

app.get('/', (req,res) => {
    const help = ``

    res.send(help)
})

app.use((req, res, next) => {
    const token = req.get('authorization')

    if(token) {
        req.token = token
        next()
        } else {
            req.status(403).send({
                error: 'please provide a authorization'
            })
        }
    })

    app.get('/contact', (req ,res) => {
        res.send(contact.get(req.token))
    })

    app.delete('/contact/:id', (req, res) => {
        res.send(contacts.remove(req.token, req.params.id))
    })
    app.post('/contact', bodyparser.json(), (req, res) => {
        const { name, email } = req.body

        if(name && email) {
            res.send(contact.add(req.token, req.body))
        } else {
            res.status(403).send({
                error: 'plase provide both a name and email'
            })
        }
    })

    app.listen(config.port, () => {
        console.log('server listening on port')
    })