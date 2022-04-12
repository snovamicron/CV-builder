

// components
import Navbar from "./Template/Navbar"
// import Template_1 from "./Template/Template_1"

// MUI components
import { Box, useMediaQuery } from '@mui/material'
import { makeStyles } from "@mui/styles"
import { useTheme } from "@mui/material/styles"




const Template = () => {
  const theme = useTheme()
  const underMedium = useMediaQuery(theme.breakpoints.down('md'))
  const upperMedium = useMediaQuery(theme.breakpoints.up('md'))
  interface componentsMediaQueryInterface {
    formBoxWidth: string,
    formBoxHeight: string,
    wraperflexDirection: string
  }
  const componentsMediaQuery = (): componentsMediaQueryInterface => {
    switch (true) {
      case underMedium:
        return {
          formBoxWidth: '100%',
          formBoxHeight: '100%',
          wraperflexDirection: 'column'


        }
      case upperMedium:
        return {
          formBoxWidth: '50%',
          formBoxHeight: '90%',
          wraperflexDirection: 'row'
        }
      default:
        return {
          formBoxWidth: '50%',
          formBoxHeight: '90%',
          wraperflexDirection: 'row'
        }
    }
  }

  const useStyles = makeStyles({
    wraper: {
      marginTop: 68,
      height: '91vh',
      width: '100vw',
      display: 'flex',
      flexDirection:'column',
      alignItems: 'center',
    },
    formBox: {
      border: '2px solid #000',
      height: componentsMediaQuery().formBoxHeight,
      width: componentsMediaQuery().formBoxWidth
    }
  })
  const classes = useStyles()
  return (
    <>
      <Navbar />
      <Box className={classes.wraper}>
        <Box className={classes.formBox}>

        </Box>
        <Box className={classes.formBox}>

        </Box>
      </Box>
    </>
  )
}

export default Template