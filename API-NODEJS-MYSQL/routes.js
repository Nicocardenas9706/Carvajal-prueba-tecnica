const express = require('express')
const routes = express.Router()


// Read
routes.get('/', (req, res) => {
    req.getConnection((err, conn) => {
        if (err) return res.send(err)

        conn.query('SELECT * FROM libretas', (err, rows) => {
            if (err) return res.send(err)

            res.json(rows)
        })
    })
})

// Create
routes.post('/', (req, res) => {
    req.getConnection((err, conn) => {
        if (err) return res.send(err)

        conn.query('INSERT INTO libretas set ?', [req.body], (err, rows) => {
            if (err) return res.send(err)

            res.send('Agregado')
        })
    })
})

//Update
routes.put('/:id', (req, res) => {
    req.getConnection((err, conn) => {
        if (err) return res.send(err)

        conn.query('UPDATE libretas set ? WHERE id = ?', [req.body, req.params.id], (err, rows) => {
            if (err) return res.send(err)

            res.send('Actualizado')
        })
    })
})

// Delete
routes.delete('/:id', (req, res) => {
    req.getConnection((err, conn) => {
        if (err) return res.send(err)

        conn.query('DELETE FROM libretas WHERE id = ?', [req.params.id], (err, rows) => {
            if (err) return res.send(err)

            res.send('Eliminado')
        })
    })
})


module.exports = routes