

// components
import Navbar from './Template/Navbar'
import Template_1 from './Template/Template_1'
import Template_2 from './Template/Template_2'

// MUI components
import { Box } from '@mui/material'
import { makeStyles } from '@mui/styles'


const Template = () => {
const useStyles = makeStyles({
  wraper:{
      height:'92vh',
      marginTop:64
  }
})
const classes = useStyles()
  return (
    <>
      <Navbar/>
      <Box className={classes.wraper}>
        {/* <Template_1/> */}
        <Template_2/>
      </Box>
    </>
  )
}

export default Template