
// MUI components
import { Box, Typography, useMediaQuery } from '@mui/material'
import { makeStyles } from '@mui/styles'
import { useTheme } from '@mui/material/styles'


const Welcome = ()=>{
    const theme = useTheme()
    const matches = useMediaQuery(theme.breakpoints.down('md'))
    const matches1 = useMediaQuery('(max-width:1130px)')
    const useStyles = makeStyles({
        container1:{
            height:'100vh',
            backgroundColor:'#9cd9b7',
            display:'flex'
        },
        container2:{
            height:'75vh',
            backgroundColor:'#000'
        },
        dotContainer1:{
            height:'47vh',
            width:matches?'27vw':'20vw',
            position:'absolute',
            top:0,
            right:0,
            backgroundImage:`url('dot.png')`,
            opacity:0.4
        },
        dotContainer2:{
            height:'49vh',
            width:matches?'40vw':'25vw',
            position:'absolute',
            bottom:0,
            left:0,
            backgroundImage:`url('dot.png')`,
            opacity:0.4
        },
        tittleBox:{
            border:'2px solid #000',
            margin:'50px auto',
            width:'100%',
            display:'flex',
            justifyContent:'center',
            alignItems:'center',
            flexDirection:'column',
            zIndex:10000
        },
        title1:{
            fontSize:'5rem !important',
            fontWeight:'900 !important',
            margin:'0 !important',
            padding:'0 !important'
        }
    })
    const classes = useStyles()
    return (
        <>
            <Box className={classes.container1} >
                <Box className={classes.dotContainer1}/>
                <Box className={classes.dotContainer2}/>
                <Box className={classes.tittleBox}>
                <Typography className={classes.title1} >The fastest way to create a</Typography>
                <Typography className={classes.title1} > CURRICULUM VITAE </Typography>
                </Box>

            </Box>
            <Box className={classes.container2} >

            </Box>
        </>
    )
}

export default Welcome