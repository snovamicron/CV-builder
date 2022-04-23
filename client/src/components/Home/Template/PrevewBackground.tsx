
// MUI components
import { Box, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'
import SentimentDissatisfiedIcon from '@mui/icons-material/SentimentDissatisfied'

const PrevewBackground = ()=>{
    const useStyles = makeStyles({
        wraper:{
            height:'100%',
            display:'flex',
            flexDirection:'column',
            justifyContent:'center',
            alignItems:'center'
        }
    })
    const classes = useStyles()
    return (
        <>
            <Box className={classes.wraper}>
                <Typography sx={{fontSize:'4rem', fontWeight:600}}>No Prevew</Typography>
                <SentimentDissatisfiedIcon style={{fontSize:'4rem'}} />
            </Box>
        </>
    )
}

export default PrevewBackground