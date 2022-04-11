import express from 'express'
import http from 'http'
import PDFDocument, { moveDown } from 'pdfkit'
import cors from 'cors'
import { projects } from './dev needs/constants'

const PORT = 4000
const app = express()
const server = http.createServer(app)
app.use(cors())
app.use(express.json())

// const name = 'soumyadeep mondal'

const dataObj:any = {
    name: 'soumyadeep mondal',
    bio:'The text will automatically wrap unless you set the lineBreak option to false. By default it will wrap to the page margin, but the width option allows.',
    experience:`Freelance, Freelancer, Full Stack Developer Freelancer`,
    skills:[
        'JAVASCRIPT',
        'TYPESCRIPT',
        'REACT JS',
        'NODE JS',
        'EXPRESS JS',
        'DATABASE(SQL,NOSQL)',
        'MONGO DB',
        'MySQL',
        'TYPEORM',
        'MONGOOSE'
    ],
    languages:[
        'BENGALI',
        'HINDI',
        'ENGLISH'
    ],
    contacts:[
        '9836532507',
        'mdip5675@gmail.com'
    ],
    education:`Bachelor of Science, calcutta University University University University`
}

type porjectInterface = {
    porjectName:Array<string>,
    porjectDescription:string
}

app.get('/',(req,res)=>{
    const doc = new PDFDocument({size: 'A4'})
    doc.font('Times-Roman')
    doc.fontSize(60)
    doc.text(dataObj.name,15,30)
    doc.fontSize(12)
    doc.text(dataObj.bio,15,90,{
        width:450
    })
    doc.fontSize(20)
    doc.fillColor('blue').text('EXPERIENCE',15,155)
    doc.fontSize(15)
    doc.fillColor('black').text(dataObj.experience,25,180,{
        width:280
    })
    doc.moveDown(2)
    doc.fontSize(20)
    doc.fillColor('blue').text('PROJECTS')
    projects.map((ele:porjectInterface) => {
        doc.moveDown()
        doc.fontSize(18)
        doc.fillColor('black').list(ele.porjectName)
        doc.fontSize(12)
        doc.fillColor('black').text(ele.porjectDescription,{
            width:420,
            align:'left',
        })
    })
    doc.moveDown(3)
    doc.fontSize(20)
    doc.fillColor('blue').text('EDUCATION')
    doc.fontSize(15)
    doc.moveDown()
    doc.fillColor('black').text(dataObj.education,{
        width:280
    })
    doc.fontSize(18)
    doc.fillColor('blue').text('SKILLS',413,155)
    doc.fontSize(12)
    doc.moveDown()
    doc.fillColor('black').list(dataObj.skills)
    doc.moveDown(4)
    doc.fontSize(18)
    doc.fillColor('blue').text('LANGUAGES')
    doc.moveDown()
    doc.fontSize(12)
    doc.fillColor('black').list(dataObj.languages)
    doc.moveDown(4)
    doc.fontSize(18)
    doc.fillColor('blue').text('CONTACTS')
    doc.moveDown()
    doc.fontSize(12)
    doc.fillColor('black').list(dataObj.contacts)
    
    doc.end()
    doc.pipe(res)
})

// app.post('/send', (req, res)=>{
//     const { name } = req.body
//     dataObj.name = name
//     res.status(200).send('done')
// })



server.listen(PORT, ()=>{
    console.log(`server is running on http://localhost:${PORT}`)
})