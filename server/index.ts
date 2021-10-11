import express, { Request } from 'express'
import { PORT } from './config'
import { RequestType } from "./types";

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.post('/scrape-instagram-post', (req:Request<RequestType>, res) => {
  res.send('')
})

app.listen(PORT, () => {
  console.log('Listening on', PORT)
})
