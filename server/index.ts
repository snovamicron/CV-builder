import express from 'express'
import http from 'http'
import cors from 'cors'
import templateRoutes from './routes/cvTemplateRoute'

const PORT = 4000
const app = express()
const server = http.createServer(app)
app.use(cors())
app.use(express.json())


app.use('/cv',templateRoutes)




server.listen(PORT, ()=>{
    console.log(`server is running on http://localhost:${PORT}`)
})