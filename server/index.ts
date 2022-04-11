import express from 'express'
import http from 'http'
import cors from 'cors'
import templateRoutes from './routes/cvTemplateRoute'
import { temp_1Obj } from './utils/templateObj'

const PORT = 4000
const app = express()
const server = http.createServer(app)
app.use(cors())
app.use(express.json())

// name:string,
//     bio:string,
//     experience:string,
//     skills:string[],
//     languages:string[],
//     contacts:string[],
//     education:string,
//     projects:porjectInterface[]

app.use('/cv',templateRoutes)

app.post('/send', (req, res)=>{
    const {
         name,
         bio, 
         experience, 
         skills, 
         languages, 
         contacts, 
         education, 
         projects
         } = req.body
    res.status(200).send('done')
})



server.listen(PORT, ()=>{
    console.log(`server is running on http://localhost:${PORT}`)
})