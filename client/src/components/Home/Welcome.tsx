import { useNavigate } from 'react-router-dom'


// MUI components
import { Box, Button, Typography, useMediaQuery } from '@mui/material'
import { makeStyles } from '@mui/styles'
import { useTheme } from '@mui/material/styles'
import FavoriteIcon from '@mui/icons-material/Favorite';


const Welcome = ()=>{
    const theme = useTheme()
    const navigate = useNavigate()
    const mqa = useMediaQuery(theme.breakpoints.between('md','lg'))
    const mqb = useMediaQuery(theme.breakpoints.between('sm','md'))
    const mqc = useMediaQuery(theme.breakpoints.down('sm'))
    const mqStyle = ():any =>{
        switch (true) {
            case mqa:
                return {
                    title1_fontSize: '3.8rem',
                    title2_fontSize: '1.3rem',
                    button_fontSize: '2rem',
                    container1_Height: '100vh',
                    container2_Height: '60vh',
                    ss1_position: 250,
                    tittleBoxPaddingTop:150
                }
            case mqb:
                return {
                    title1_fontSize: '3rem',
                    title2_fontSize: '1rem',
                    button_fontSize: '1.5rem',
                    container1_Height: '70vh',
                    container2_Height: '40vh',
                    ss1_position: 40,
                    tittleBoxPaddingTop:150
                }
            case mqc:
                return {
                    title1_fontSize: '2.4rem',
                    title2_fontSize: '1rem',
                    button_fontSize: '1.5rem',
                    container1_Height: '70vh',
                    container2_Height: '40vh',
                    ss1_position: 40,
                    tittleBoxPaddingTop:60
                }
            default:
                return {
                    title1_fontSize:'5rem',
                    title2_fontSize: '1.3rem',
                    button_fontSize: '2rem',
                    container1_Height: '100vh',
                    container2_Height: '75vh',
                    ss1_position: 200,
                    tittleBoxPaddingTop:150
                }
        }
    }
    const useStyles = makeStyles({
        container1:{
            height:mqStyle().container1_Height,
            backgroundColor:'#9cd9b7',
            display:'flex',
            position:'relative'
        },
        container2:{
            height:mqStyle().container2_Height,
            backgroundColor:'#000',
            display:'flex',
            alignItems:'center',
            justifyContent:'flex-end',
            flexDirection:'column',
            paddingBottom:30,
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
            height:'60vh',
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
            paddingTop:mqStyle().tittleBoxPaddingTop
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
        },
        ss1:{
            width:'78vw',
            position:'relative',
            top:mqStyle().ss1_position,
            padding:15,
            boxSizing:'border-box',
            backgroundColor:'#fff',
            borderRadius:20
        },
        logo:{
            height:'50px',
            position:'absolute',
            top:10,
            left:20
        },
        logoTitle:{
            fontSize:'1.5rem !important',
            fontWeight:'600 !important',
            position:'absolute',
            top:20,
            left:75,
            color:'#fff',
            textShadow:'1px 1px #000 !important'
        }
    })
    const classes = useStyles()
    return (
        <>
            <Box className={classes.container1} >
                <Box className={classes.dotContainer1}/>
                <Box className={classes.dotContainer2}/>
                <img className={classes.logo} src="logo192.png" alt="logo" />
                <Typography className={classes.logoTitle}>Rabbit</Typography>
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
                onClick={()=>navigate('/template')}
                >
                    Get Started
                </Button>
                <img src="ss1.png" alt="ss" className={classes.ss1} />
                </Box>
            </Box>
            <Box className={classes.container2} >
                <Box sx={{display:'flex'}}>
                <Typography sx={{color:'#fff'}}>
                    made by NOVA with
                </Typography>
                <Typography sx={{color:'#fff', marginLeft:1}}><FavoriteIcon/></Typography>
                </Box>
            </Box>
        </>
    )
}

export default Welcome