const express = require('express')
const mysql = require('mysql')
const bodyParser = require('body-parser')

const app = express()
const port = 3000

app.use(bodyParser.json())

const connection = mysql.createConnection({
  host: 'db',
  user: 'root',
  password: '1234',
  database: 'nodedb',
})

connection.connect()

app.get('/', (req, res) => {
  connection.query(
    `INSERT INTO people(name) VALUES('Full Cycle')`,
    (err, results) => {
      if (err) throw err

      connection.query('SELECT name FROM people', (err, results) => {
        if (err) throw err

        let names = results.map((row) => row.name).join('<br>')
        console.log(names)
        res.send(`<h1>Full Cycle Rocks!</h1><p>${names}</p>`)
      })
    }
  )
})

app.post('/add', (req, res) => {
  const { name } = req.body
  if (!name) {
    res.status(400).send('Nome é necessário')
  } else {
    connection.query(
      `INSERT INTO people(name) VALUES('${name}')`,
      (err, results) => {
        if (err) throw err
        res.send(`Nome ${name} adicionado com sucesso!`)
      }
    )
  }
})

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`)
})
