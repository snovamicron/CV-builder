import express from 'express'
import http from 'http'
import cors from 'cors'
import template_1Routes from './routes/Template_1'
import template_2Routes from './routes/Template_2'

const PORT = 4000
const app = express()
const server = http.createServer(app)
app.use(cors())
app.use(express.json())


app.use('/cv', template_1Routes)
app.use('/cv', template_2Routes)







server.listen(PORT, () => {
    console.log(`server is running on http://localhost:${PORT}`)
})