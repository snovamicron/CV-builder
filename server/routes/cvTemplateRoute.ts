import express from 'express'
import PDFDocument from 'pdfkit'
import { temp_1Obj, porjectInterface } from '../utils/templateObj'

const router = express.Router()

var temp_1 = new temp_1Obj(
    '',
    '',
    '',
    [],
    [],
    [],
    '',
    []
  );
router.post('/temp_1_data',(req, res)=>{
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
  temp_1 = new temp_1Obj(
    name,
    bio,
    experience,
    skills,
    languages,
    contacts,
    education,
    projects
  )
  res.status(200).send('CV is ready')
})

router.get('/template_1',(req, res)=>{
    const doc = new PDFDocument({size: 'A4'})
    // Name section
    doc.font('Times-Roman')
    doc.fontSize(40)
    doc.text(temp_1.name,15,30)

    //Bio section
    doc.fontSize(12)
    doc.text(temp_1.bio,15,90,{
        width:450
    })

    // experience section
    doc.fontSize(20)
    doc.fillColor('blue').text('EXPERIENCE',15,155)
    doc.fontSize(15)
    doc.fillColor('black').text(temp_1.experience,25,180,{
        width:280
    })
    doc.moveDown(2)

    // projects section
    doc.fontSize(20)
    doc.fillColor('blue').text('PROJECTS')
    temp_1.projects.map((ele:porjectInterface) => {
        doc.moveDown()
        doc.fontSize(18)
        doc.fillColor('black').list(ele.porjectName,{
            width:420
        })
        doc.fontSize(12)
        doc.fillColor('black').text(ele.porjectDescription,{
            width:380,
            align:'left',
        })
    })
    doc.moveDown(3)

    // education section
    doc.fontSize(20)
    doc.fillColor('blue').text('EDUCATION')
    doc.fontSize(15)
    doc.moveDown()
    doc.fillColor('black').text(temp_1.education,{
        width:280
    })

    // skills section
    doc.fontSize(18)
    doc.fillColor('blue').text('SKILLS',413,155)
    doc.fontSize(12)
    doc.moveDown()
    doc.fillColor('black').list(temp_1.skills)
    doc.moveDown(4)

    // languages section
    doc.fontSize(18)
    doc.fillColor('blue').text('LANGUAGES')
    doc.moveDown()
    doc.fontSize(12)
    doc.fillColor('black').list(temp_1.languages)
    doc.moveDown(4)

    //contact section
    doc.fontSize(18)
    doc.fillColor('blue').text('CONTACTS')
    doc.moveDown()
    doc.fontSize(12)
    doc.fillColor('black').list(temp_1.contacts)
    

    // end and respostion section
    doc.end()
    temp_1 = new temp_1Obj(
        '',
        '',
        '',
        [],
        [],
        [],
        '',
        []
      );
    doc.pipe(res)
})

export default router