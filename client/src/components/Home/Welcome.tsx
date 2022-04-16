
// MUI components
import { Box, Button, Typography, useMediaQuery } from '@mui/material'
import { makeStyles } from '@mui/styles'
import { useTheme } from '@mui/material/styles'


const Welcome = ()=>{
    const theme = useTheme()
    const mqa = useMediaQuery(theme.breakpoints.between('md','lg'))
    const mqb = useMediaQuery(theme.breakpoints.between('sm','md'))
    const mqc = useMediaQuery(theme.breakpoints.down('sm'))
    const mqStyle = ():any =>{
        switch (true) {
            case mqa:
                return {
                    title1_fontSize: '3.8rem',
                    title2_fontSize: '1.3rem',
                    button_fontSize: '2rem'
                }
            case mqb:
                return {
                    title1_fontSize: '3rem',
                    title2_fontSize: '1rem',
                    button_fontSize: '1.5rem'
                }
            case mqc:
                return {
                    title1_fontSize: '2.4rem',
                    title2_fontSize: '1rem',
                    button_fontSize: '1.5rem'
                }
            default:
                return {
                    title1_fontSize:'5rem',
                    title2_fontSize: '1.3rem',
                    button_fontSize: '2rem'
                }
        }
    }
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
            width:'22vw',
            position:'absolute',
            top:0,
            right:0,
            backgroundImage:`url('dot.png')`,
            opacity:0.4
        },
        dotContainer2:{
            height:'49vh',
            width:'32vw',
            position:'absolute',
            bottom:0,
            left:0,
            backgroundImage:`url('dot.png')`,
            opacity:0.4
        },
        tittleBox:{
            width:'100%',
            display:'flex',
            alignItems:'center',
            flexDirection:'column',
            zIndex:10000,
            paddingTop:190
        },
        title1:{
            fontSize:`${mqStyle().title1_fontSize} !important`,
            fontWeight:'800 !important',
            margin:'0 !important',
            padding:'0 !important',
            textAlign:'center'
        },
        title2:{
            width:'70%',
            textAlign:'center',
            fontSize:`${mqStyle().title2_fontSize} !important`,
            fontWeight:'600 !important',
            opacity:0.5,
            marginTop:'20px !important'
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
                <Typography sx={{fontWeight:900, color:'#277a00'}} className={classes.title1} > CURRICULUM VITAE </Typography>
                <Typography className={classes.title2}>Our main focus is to build quick and instant cv by simply feeling some field but it is not recommended for important and very informative cv's thank you for using my application.</Typography>
                <Button
                sx={{
                    paddingX:8,
                    borderRadius:4,
                    height:'65px',
                    fontSize:mqStyle().button_fontSize,
                    marginTop:5,
                    fontWeight:600
                }}
                variant='contained'
                color='success'
                >
                    Get Started
                </Button>
                </Box>
            </Box>
            <Box className={classes.container2} ></Box>
        </>
    )
}

export default Welcome