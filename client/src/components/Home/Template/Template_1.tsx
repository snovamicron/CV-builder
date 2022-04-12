
// MUI components
import { Box, TextField } from '@mui/material'
import { makeStyles } from '@mui/styles'

const Template_1 = ()=>{
    const useStyles = makeStyles({
        wraper:{

        }
    })
    const classes = useStyles()
    return(
        <>
        <Box className={classes.wraper}>
            <TextField/>
            <TextField/>
            <TextField/>
            <TextField/>
        </Box>
        </>
    )
}

export default Template_1