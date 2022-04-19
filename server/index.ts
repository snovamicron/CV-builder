import express from 'express'
import http from 'http'
import cors from 'cors'
import templateRoutes from './routes/cvTemplateRoute'
import PDFDocument from 'pdfkit'

const PORT = 4000
const app = express()
const server = http.createServer(app)
app.use(cors())
app.use(express.json())


app.use('/cv', templateRoutes)

const temp_2Obj = {
    name: 'RAHUL DEBNATH',
    address: 'DANSHI,SALAP,HOWRAH 711409',
    contact_number: '9330940356',
    email: 'mdip675@gmail.com',
    Career_Objective: 'esis is the main point of the essay, the topic sentence is the main point of the paragraph. Like the thesis statement, a topic sentence has a unifying function.',
    Educational_Qualification:'H.S PASS , GRADUATE IN B.COM (HONS)',
    Work_Experience:'BPO(Customer care service)',
    Technical_Skills:[
        'Windows XP' ,
        'Ms Office' 
    ]
}

app.get('/', (req, res) => {
    const doc = new PDFDocument({size:'A4'})
    doc.lineGap(1.5)
    doc.font('Times-Bold')
    doc.fontSize(13)
    doc.text(temp_2Obj.name, {
    })
    doc.font('Times-Roman')
    doc.fontSize(12)
    doc.text(temp_2Obj.address)
    doc.text(`Mobile no: ${temp_2Obj.contact_number}`)
    doc.text(`Email id: ${temp_2Obj.email}`)
    doc.moveTo(62, 140)
        .lineTo(570, 140)
        .lineWidth(2.5)
        .stroke()
    doc.moveDown(2)
    doc.font('Times-Bold')
    doc.text(`Career Objective`, {
        underline: true
    })
    doc.moveDown(0.5)
    doc.font('Times-Roman')
    doc.text(`${temp_2Obj.Career_Objective}`,{
        indent:35
    })
    doc.moveDown(1.5)
    doc.font('Times-Bold')
    doc.text(`Educational Qualification`, {
        underline: true
    })
    doc.moveDown(0.3)
    doc.font('Times-Roman')
    doc.text(`${temp_2Obj.Educational_Qualification}`,{
        indent:35
    })
    doc.moveDown(3)
    doc.font('Times-Bold')
    doc.text(`Work Experience`, {
        underline: true
    })
    doc.moveDown(0.3)
    doc.font('Times-Roman')
    doc.text(`${temp_2Obj.Work_Experience}`,{
        indent:35
    })
    doc.moveDown(4)
    doc.font('Times-Bold')
    doc.text(`Technical Skills`, {
        underline: true
    })
    doc.moveDown(0.5)
    doc.font('Times-Roman')
    doc.list(temp_2Obj.Technical_Skills,{
        indent:35
    })
    doc.end()
    doc.pipe(res)
})




server.listen(PORT, () => {
    console.log(`server is running on http://localhost:${PORT}`)
})