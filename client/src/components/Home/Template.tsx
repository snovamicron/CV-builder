import {
  useNavigate
} from 'react-router-dom'

// components
import Navbar from './Template/Navbar'

// MUI components
import { Button, Box, Grid, useMediaQuery } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import { makeStyles } from '@mui/styles'

const Template = () => {
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.up('lg'))
  const navigate = useNavigate()
  const useStyles = makeStyles({
    wraper: {
      marginTop: 120
    },
    template: {
      margin: '10px !important',
      fontSize: '1.5rem !important'
    },
    templateImage: {
      border: '2px solid #000',
      marginBottom: 15,
      width:matches ? '55%' : '100%',
      cursor:'pointer'
    },
    templateBox: {
      display:'flex',
      flexDirection:'column',
      alignItems:'center',
      padding:30,
      boxSizing:'border-box'
    }
  })
  const classes = useStyles()
  return (
    <>
      <Navbar />
      <Box className={classes.wraper}>
        <Grid container>
          <Grid item xs={12} md={6} >
            <Box className={classes.templateBox}>
              <img className={classes.templateImage} onClick={() => navigate('/template_1')} src="template_1.png" alt="template_1" />
              <Button
                className={classes.template}
                onClick={() => navigate('/template_1')}
                color='success'
                size='large'
                variant='contained'
              >
                Template 1
              </Button>
            </Box>
          </Grid>
          <Grid item xs={12} md={6} >
            <Box className={classes.templateBox}>
              <img className={classes.templateImage} onClick={() => navigate('/template_2')} src="template_2.png" alt="template_2" />
              <Button
                className={classes.template}
                onClick={() => navigate('/template_2')}
                color='success'
                size='large'
                variant='contained'
              >
                Template 2
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  )
}

export default Template