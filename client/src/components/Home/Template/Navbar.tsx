
// MUI components
import { 
    AppBar,
    Box,
    Toolbar,
    Typography
 } from '@mui/material'
 import { makeStyles } from '@mui/styles'


const Navbar = ()=>{
    const useStyles = makeStyles({
        navbar:{
            backgroundColor:'#4ec762 !important',
            display:'flex',
            alignItems:'center',
            justifyContent:'center'
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
                <Toolbar className={classes.navbar}>
                    <img src="logo192.png" alt="logo" className={classes.logo} />
                    <Typography className={classes.logoTitle}>Rabbit</Typography>
                </Toolbar>
            </AppBar>
        </Box>
        </>
    )
}

export default Navbar
