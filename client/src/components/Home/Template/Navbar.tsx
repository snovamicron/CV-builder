
// MUI components
import { 
    AppBar,
    Box,
    Toolbar
 } from '@mui/material'
 import { makeStyles } from '@mui/styles'


const Navbar = ()=>{
    const useStyles = makeStyles({
        navbar:{
            backgroundColor:'#4ec762 !important'
        }
    })
    const classes = useStyles()
    return (
        <>
        <Box>
            <AppBar sx={{position:'initial'}} className={classes.navbar}>
                <Toolbar></Toolbar>
            </AppBar>
        </Box>
        </>
    )
}

export default Navbar
