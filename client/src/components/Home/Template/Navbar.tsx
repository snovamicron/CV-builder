import { useNavigate } from 'react-router-dom'

// MUI components
import { 
    AppBar,
    Box,
    Toolbar,
    Typography
 } from '@mui/material'
 import { makeStyles } from '@mui/styles'


const Navbar = ()=>{
    const navigate = useNavigate()
    const useStyles = makeStyles({
        navBox:{
            display:'flex',
            alignItems:'center',
            justifyContent:'center',
            margin:'0 auto',
            cursor:'pointer'
        },
        logo:{
            height:50
        },
        logoTitle:{
            fontSize:'2rem !important',
            fontWeight:'600 !important',
            marginLeft:'10px !important'
        }
    })
    const classes = useStyles()
    return (
        <>
        <Box>
            <AppBar>
                <Toolbar sx={{backgroundColor:'#4ec762 !important'}}>
                       <Box className={classes.navBox} onClick={()=>navigate("/")} >
                       <img src="logo192.png" alt="logo" className={classes.logo}/>
                    <Typography className={classes.logoTitle}>Rabbit</Typography>
                       </Box>
                </Toolbar>
            </AppBar>
        </Box>
        </>
    )
}

export default Navbar
