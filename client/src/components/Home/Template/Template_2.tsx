import React, { useState } from 'react'

// Constants
import { sexs, maritalStatus, Nationalities } from '../../../constants/OptionArr';

// MUI components
import {
    Box,
    Grid,
    useMediaQuery,
    TextField,
    TextareaAutosize,
    Button,
    Typography,
    IconButton,
    InputLabel,
    MenuItem
} from '@mui/material'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import CloseIcon from '@mui/icons-material/Close';
import { useTheme } from '@mui/material/styles'
import { makeStyles } from '@mui/styles'

// API


const Template_2 = () => {
    const [show, setShow] = useState<boolean>(false)
    const theme = useTheme()
    const matches = useMediaQuery(theme.breakpoints.up('md'))
    const useStyles = makeStyles({
        components: {
            border: '2px solid #000',
            height: '100%',
            maxHeight: '90vh',
            padding: 10,
            boxSizing: 'border-box',
            overflow: 'auto !important'
        },
        text: {
            '& > div > input': {
                padding: '0 10px !important',
                height: 65,
                fontSize: matches?'1.5rem':'1rem'
            },
            '& > label': {
                fontSize: matches?'1.5rem':'1rem'
            }
        },
        options:{
            '& > div > div':{
                padding: '15px 50px !important',
                fontSize: matches?'1.5rem':'1rem'
            },
            '& > label': {
                fontSize: matches?'1.5rem':'1rem'
            }
        }
    })
    const classes = useStyles()
    interface formDataInterface {
        name: string,
        address: string,
        contact_number: string,
        email: string,
        Career_Objective: string,
        Educational_Qualification: string,
        Work_Experience: string,
        dob: string,
        Father_Name: string,
        sex: string,
        Marital_Status: string,
        Languages_Known: string,
        Nationality: string,
        Hobbies_Interest: string,
        Declaration: string,
        place: string,
        date: string,
        Technical_Skills: string[]
    }
    const [formData, setFormData] = useState<formDataInterface>({
        name: '',
        address: '',
        contact_number: '',
        email: '',
        Career_Objective: '',
        Educational_Qualification: '',
        Work_Experience: '',
        dob: '',
        Father_Name: '',
        sex: '',
        Marital_Status: '',
        Languages_Known: '',
        Nationality: '',
        Hobbies_Interest: '',
        Declaration: '',
        place: '',
        date: '',
        Technical_Skills:['']
    })
    const handleFormDataChange = (e:React.ChangeEvent<HTMLInputElement>):void=>{
        setFormData({...formData, [e.target.name]:e.target.value})
    }
    return (
        <>
            <Grid container sx={{ height: '100%', padding: '10px 10px' }} columnSpacing={{ xs: 1 }} >
                {
                    !show || matches ? <Grid item xs={12} md={7} >
                        <Box className={classes.components}>
                            <Grid container spacing={{ xs: 1 }}>
                                <Grid item xs={12} md={6}>
                                    <TextField
                                        fullWidth
                                        className={classes.text}
                                        name='name'
                                        label='Name'
                                        placeholder='Enter your name'
                                        value={formData.name}
                                        onChange={(e:React.ChangeEvent<HTMLInputElement>)=>handleFormDataChange(e)}
                                    />
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <TextField
                                        fullWidth
                                        className={classes.text}
                                        name='Father_Name'
                                        label='Father Name'
                                        placeholder='Enter your father name'
                                        value={formData.Father_Name}
                                        onChange={(e:React.ChangeEvent<HTMLInputElement>)=>handleFormDataChange(e)}
                                    />
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <TextField
                                        fullWidth
                                        className={classes.text}
                                        name='address'
                                        label='Address'
                                        placeholder='Enter your address'
                                        value={formData.address}
                                        onChange={(e:React.ChangeEvent<HTMLInputElement>)=>handleFormDataChange(e)}
                                    />
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <TextField
                                        fullWidth
                                        className={classes.text}
                                        name='contact_number'
                                        label='Number'
                                        placeholder='Enter your contact number'
                                        value={formData.contact_number}
                                        onChange={(e:React.ChangeEvent<HTMLInputElement>)=>handleFormDataChange(e)}
                                    />
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <TextField
                                        type='email'
                                        fullWidth
                                        className={classes.text}
                                        name='email'
                                        label='Email'
                                        placeholder='Enter your Email'
                                        value={formData.email}
                                        onChange={(e:React.ChangeEvent<HTMLInputElement>)=>handleFormDataChange(e)}
                                    />
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <InputLabel>Enter your date of birth</InputLabel>
                                    <TextField
                                        type='date'
                                        fullWidth
                                        className={classes.text}
                                        name='dob'
                                        value={formData.dob}
                                        onChange={(e:React.ChangeEvent<HTMLInputElement>)=>handleFormDataChange(e)}
                                    />
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <TextField
                                        fullWidth
                                        label='sex'
                                        className={classes.options}
                                        select
                                        name='sex'
                                        value={formData.sex}
                                        onChange={(e:React.ChangeEvent<HTMLInputElement>)=>handleFormDataChange(e)}
                                    >
                                        {sexs.map((option) => (
                                            <MenuItem key={option} value={option}>
                                                {option}
                                            </MenuItem>
                                        ))}
                                    </TextField>
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <TextField 
                                    fullWidth
                                    className={classes.options}
                                    label='Marital Status'
                                    select
                                    name='Marital_Status'
                                    value={formData.Marital_Status}
                                    onChange={(e:React.ChangeEvent<HTMLInputElement>)=>handleFormDataChange(e)} 
                                    >
                                        {maritalStatus.map((option) => (
                                            <MenuItem key={option} value={option}>
                                                {option}
                                            </MenuItem>
                                        ))}
                                    </TextField>
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <TextField 
                                    fullWidth 
                                    className={classes.options}
                                    name='Nationality'
                                    label='Nationality'
                                    select
                                    value={formData.Nationality}
                                    onChange={(e:React.ChangeEvent<HTMLInputElement>)=>handleFormDataChange(e)}
                                    >
                                        {Nationalities.map((option) => (
                                            <MenuItem key={option} value={option}>
                                                {option}
                                            </MenuItem>
                                        ))}
                                    </TextField>
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <TextField fullWidth className={classes.text} />
                                </Grid>
                            </Grid>
                        </Box>
                    </Grid> : null
                }
                {
                    matches || show ?
                        <Grid item xs={12} md={5}>
                            <Box className={classes.components} sx={{ display: 'flex', flexDirection: 'column' }}>
                                {
                                    !matches &&
                                    <IconButton sx={{ marginLeft: 'auto' }} onClick={() => setShow(false)}>
                                        <CloseIcon />
                                    </IconButton>
                                }
                                {
                                    show && <iframe style={{ width: '100%', height: '100%' }} src='http://localhost:4000/cv/template_1' />
                                }
                            </Box>
                        </Grid> : null
                }
            </Grid>
        </>
    )
}

export default Template_2