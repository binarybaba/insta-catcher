import express from 'express'
import { PORT } from './config'

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.post('/catch', (req, res) => {
  res.send('')
})

app.listen(PORT, () => {
  console.log('Listening on', PORT)
})
