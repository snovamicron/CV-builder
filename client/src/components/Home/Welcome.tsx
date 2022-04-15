
// MUI components
import { Box } from '@mui/material'
import { makeStyles } from '@mui/styles'


const Welcome = ()=>{
    const useStyles = makeStyles({
        container1:{
            height:'100vh',
            backgroundColor:'#9cd9b7'
        },
        dotContainer:{
            height:'59vh',
            width:'20vw',
            position:'absolute',
            top:0,
            right:0,
            backgroundImage:`url('dot.png')`,
            opacity:0.080
        }
    })
    const classes = useStyles()
    return (
        <>
            <Box className={classes.container1} >
                <Box className={classes.dotContainer}>
                </Box>

            </Box>
        </>
    )
}

export default Welcome