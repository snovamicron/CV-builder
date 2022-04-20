import express from 'express'
import PDFDocument from 'pdfkit'
import { temp_2Obj } from '../utils/templateObj'

const router = express.Router()

var temp_2 = new temp_2Obj(
    '','','','','',
    '','','','','',
    '','','','','',
    '','',[]
)
router.post('/temp_2_data',(req, res)=>{
    const {
        name,
        address,
        contact_number,
        email,
        Career_Objective,
        Educational_Qualification,
        Work_Experience,
        dob,
        Father_Name,
        sex,
        Marital_Status,
        Languages_Known,
        Technical_Skills,
        Nationality,
        Hobbies_Interest,
        Declaration,
        place,
        date,
    } = req.body
    temp_2 = new temp_2Obj(
        name,
    address,
    contact_number,
    email,
    Career_Objective,
    Educational_Qualification,
    Work_Experience,
    dob,
    Father_Name,
    sex,
    Marital_Status,
    Languages_Known,
    Nationality,
    Hobbies_Interest,
    Declaration,
    place,
    date,
    Technical_Skills
    )
    res.status(200).send('CV is ready')
  })
router.get('/template_2',(req, res)=>{
    const doc = new PDFDocument({
        size:'A4',
        margins:{
            top:60,
            bottom:50,
            left:75,
            right:50
        }
    })
    doc.lineGap(1.5)
    doc.font('Times-Bold')
    doc.fontSize(15)
    doc.text(temp_2.name, {
    })
    doc.font('Times-Roman')
    doc.fontSize(12)
    doc.text(temp_2.address)
    doc.text(`Mobile no: ${temp_2.contact_number}`)
    doc.text(`Email id: ${temp_2.email}`)
    doc.moveTo(65, 130)
        .lineTo(570, 130)
        .lineWidth(2.5)
        .stroke()
    doc.moveDown(2)
    doc.font('Times-Bold')
    doc.text(`Career Objective`, {
        underline: true
    })
    doc.moveDown(0.5)
    doc.font('Times-Roman')
    doc.text(`${temp_2.Career_Objective}`,{
        indent:35
    })
    doc.moveDown(1.5)
    doc.font('Times-Bold')
    doc.text(`Educational Qualification`, {
        underline: true
    })
    doc.moveDown(0.3)
    doc.font('Times-Roman')
    doc.text(`${temp_2.Educational_Qualification}`,{
        indent:35
    })
    doc.moveDown(3)
    doc.font('Times-Bold')
    doc.text(`Work Experience`, {
        underline: true
    })
    doc.moveDown(0.3)
    doc.font('Times-Roman')
    doc.text(`${temp_2.Work_Experience}`,{
        indent:35
    })
    doc.moveDown(3)
    doc.font('Times-Bold')
    doc.text(`Technical Skills`, {
        underline: true
    })
    doc.moveDown(0.5)
    doc.font('Times-Roman')
    doc.list(temp_2.Technical_Skills,{
        indent:35
    })
    doc.moveDown(2.5)
    doc.font('Times-Bold')
    doc.text(`Personal Details`, {
        underline: true
    })
    doc.moveDown(1.5)
    doc.font('Times-Roman')
    doc.text('Name                           : '+ temp_2.name,{
        indent:35
    })
    doc.moveDown(0.3)
    doc.text('Date of Birth               : '+ temp_2.dob,{
        indent:35
    })
    doc.moveDown(0.3)
    doc.text('Father Name               : '+temp_2.Father_Name,{
        indent:35
    })
    doc.moveDown(0.3)
    doc.text("Sex                              : "+temp_2.sex,{
        indent:35
    })
    doc.moveDown(0.3)
    doc.text(`Marital Status              : ${temp_2.Marital_Status}`,{
        indent:35
    })
    doc.moveDown(0.3)
    doc.text(`Languages Known      : ${temp_2.Languages_Known}`,{
        indent:35   
    })
    doc.moveDown(0.3)
    doc.text(`Nationality                  : ${temp_2.Nationality}`,{
        indent:35
    })
    doc.moveDown(0.3)
    doc.text(`Hobbies & Interest      : ${temp_2.Hobbies_Interest}`,{
        indent:35
    })
    doc.moveDown(3)
    doc.font('Times-Bold')
    doc.text(`Declaration`, {
        underline: true
    })
    doc.moveDown(0.8)
    doc.font('Times-Roman')
    doc.text(temp_2.Declaration,{
        indent:35
    })
    doc.moveDown(1.5)
    doc.text(`(${temp_2.name})`,{
        indent:320
    })
    doc.moveUp()
    doc.text(`Place: ${temp_2.place}`)
    doc.text(`Date: ${temp_2.date}`)
    doc.end()
    doc.pipe(res)
})


export default router