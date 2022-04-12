import { useState, useEffect } from "react"

// components
import Navbar from "./Template/Navbar"
import Template_1 from "./Template/Template_1"

// MUI components
import { Box, useMediaQuery } from '@mui/material'
import { makeStyles } from "@mui/styles"




const Template = ()=>{
  interface styleInterface{
    formBoxWidth:string,
  }
const [matches, setMatches] = useState<styleInterface>({formBoxWidth:'90%'})



  const useStyles = makeStyles({
    wraper:{
      border:'2px solid #000',
      height:'92vh',
      width:'100vw',
      display:'flex',
      alignItems:'center',
      padding:'0 20px'
    },
    formBox:{
      border:'2px solid #000',
      height:'90%',
      width:'40%'
    }
  })
  const classes = useStyles()
    return (
        <>
          <Navbar/>
          <Box className={classes.wraper}>
            <Box className={classes.formBox}>

            </Box>
          </Box>
        </>
    )
}

export default Template