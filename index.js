import express from 'express'

const app = express()

app.listen(3000, () => console.log('Application listening on 3001'))

app.get('/', (req, res) => res.json({message: 'SUCCESS'}))