import { useNavigate } from 'react-router-dom'

// MUI components
import {
    AppBar,
    Box,
    Toolbar,
    Typography
} from '@mui/material'
import { makeStyles } from '@mui/styles'


const Navbar = () => {
    const navigate = useNavigate()
    const useStyles = makeStyles({
        navTool: {
            display: 'flex',
            justifyContent:'space-between !important',
            backgroundColor: '#4ec762 !important'
        },
        navBox: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            margin:'0 20px'
        },
        logo: {
            height: 50
        },
        logoTitle: {
            fontSize: '2rem !important',
            fontWeight: '600 !important',
            marginLeft: '10px !important'
        }
    })
    const classes = useStyles()
    return (
        <>
            <Box>
                <AppBar>
                    <Toolbar className={classes.navTool}>
                        <Box  className={classes.navBox} onClick={() => navigate("/")} >
                            <img src="logo192.png" alt="logo" className={classes.logo} />
                            <Typography className={classes.logoTitle}>Rabbit</Typography>
                        </Box>
                        <Box  className={classes.navBox} onClick={() => navigate("/template")} >
                            <Typography className={classes.logoTitle}>#Templates</Typography>
                        </Box>
                    </Toolbar>
                </AppBar>
            </Box>
        </>
    )
}

export default Navbar
