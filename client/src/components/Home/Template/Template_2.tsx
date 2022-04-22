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
    IconButton,
    InputLabel,
    MenuItem,
    Chip,
    Button,
    InputAdornment,
} from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { useTheme } from '@mui/material/styles'
import { makeStyles } from '@mui/styles'

// API
import { send_template_2_data } from '../../../services/allApi';

// components
import Navbar from './Navbar';


const Template_2 = () => {
    const [show, setShow] = useState<boolean>(false)
    const theme = useTheme()
    const matches = useMediaQuery(theme.breakpoints.up('md'))
    const useStyles = makeStyles({
        wraper:{
            height:'92vh',
            marginTop:64
        },
        components: {
            border: '2px solid #000',
            height: '100%',
            maxHeight: '90vh',
            padding: '10px 10px',
            paddingBottom: '40px',
            boxSizing: 'border-box',
            overflow: 'auto !important',
            '&::-webkit-scrollbar': {
                display: 'none'
            }
        },
        text: {
            '& > div > input': {
                padding: '0 10px !important',
                height: 65,
                fontSize: matches ? '1.5rem' : '1rem'
            },
            '& > label': {
                fontSize: matches ? '1.5rem' : '1rem'
            }
        },
        options: {
            '& > div > div': {
                padding: '15px 50px !important',
                fontSize: matches ? '1.5rem' : '1rem'
            },
            '& > label': {
                fontSize: matches ? '1.5rem' : '1rem'
            }
        },
        textArea: {
            maxWidth: '100%',
            width: '100%',
            borderRadius: 5,
            padding: '20px 10px',
            fontSize: matches ? '1.5rem' : '1rem'
        },
        skillsChip: {
            fontSize: matches ? '1.3rem !important' : '1rem !important',
            margin: '9px 4px !important',
            height: '35px !important'
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
        Technical_Skills: []
    })
    const [skillsData, setSkillsData] = useState<string>('')
    const handleFormDataChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>): void => {
        if (e.target.name !== 'Technical_Skills') {
            setFormData({ ...formData, [e.target.name]: e.target.value })
        }
    }
    const handleTechnicalSkillsData = (e: any): void => {
        if (e.key === 'Enter') {
            let newSkills = formData.Technical_Skills
            newSkills.push(e.target.value)
            setFormData({ ...formData, Technical_Skills: newSkills })
            setSkillsData('')
        }
    }
    const handleTechnicalSkillsDataButton = (): void => {
            let newSkills = formData.Technical_Skills
            newSkills.push(skillsData)
            setFormData({ ...formData, Technical_Skills: newSkills })
            setSkillsData('')
    }
    const onChipDisable = (e: number): void => {
        let newSkills = formData.Technical_Skills
        newSkills.splice(e, 1)
        setFormData({ ...formData, Technical_Skills: newSkills })
    }
    const onAllDataSubmit = async (): Promise<void> => {
        setShow(false)
        await send_template_2_data(formData)
        setShow(true)
    }
    return (
        <>
            <Navbar/>
            <Box className={classes.wraper}>
                <Grid container sx={{ height: '100%', padding: '10px 10px' }} columnSpacing={{ xs: 1 }} >
                    {
                        !show || matches ?
                            <Grid item xs={12} md={7} >
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
                                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleFormDataChange(e)}
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
                                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleFormDataChange(e)}
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
                                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleFormDataChange(e)}
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
                                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleFormDataChange(e)}
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
                                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleFormDataChange(e)}
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
                                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleFormDataChange(e)}
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
                                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleFormDataChange(e)}
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
                                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleFormDataChange(e)}
                                            >
                                                {maritalStatus.map((option) => (
                                                    <MenuItem key={option} value={option}>
                                                        {option}
                                                    </MenuItem>
                                                ))}
                                            </TextField>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <TextField
                                                fullWidth
                                                className={classes.options}
                                                name='Nationality'
                                                label='Nationality'
                                                select
                                                value={formData.Nationality}
                                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleFormDataChange(e)}
                                            >
                                                {Nationalities.map((option) => (
                                                    <MenuItem key={option} value={option}>
                                                        {option}
                                                    </MenuItem>
                                                ))}
                                            </TextField>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <TextField
                                                fullWidth
                                                className={classes.text}
                                                name='Technical_Skills'
                                                onChange={(e) => setSkillsData(e.target.value)}
                                                value={skillsData}
                                                onKeyUp={(e) => handleTechnicalSkillsData(e)}
                                                label='Technical Skills'
                                                InputProps={{
                                                    endAdornment: (
                                                      <InputAdornment position="end">
                                                        <IconButton color='success' onClick={handleTechnicalSkillsDataButton}>
                                                        <AddCircleIcon />
                                                        </IconButton>
                                                      </InputAdornment>
                                                    ),
                                                  }}
                                            />
                                            {
                                                formData.Technical_Skills.length !== 0 &&
                                                formData.Technical_Skills.map((ele, index) => {
                                                    return (
                                                        <Chip
                                                            key={index}
                                                            label={ele}
                                                            className={classes.skillsChip}
                                                            onDelete={() => onChipDisable(index)}
                                                            color='success'
                                                        />
                                                    )
                                                })
                                            }
                                        </Grid>
                                        <Grid item xs={12}>
                                            <TextareaAutosize
                                                className={classes.textArea}
                                                name='Career_Objective'
                                                onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => handleFormDataChange(e)}
                                                value={formData.Career_Objective}
                                                placeholder='Enter your career objective'
                                            />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <TextareaAutosize
                                                className={classes.textArea}
                                                name='Educational_Qualification'
                                                onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => handleFormDataChange(e)}
                                                value={formData.Educational_Qualification}
                                                placeholder='Enter your educational qualification'
                                            />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <TextareaAutosize
                                                className={classes.textArea}
                                                name='Work_Experience'
                                                onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => handleFormDataChange(e)}
                                                value={formData.Work_Experience}
                                                placeholder='Enter your work experience'
                                            />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <TextareaAutosize
                                                className={classes.textArea}
                                                name='Languages_Known'
                                                onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => handleFormDataChange(e)}
                                                value={formData.Languages_Known}
                                                placeholder='Enter your known languages'
                                            />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <TextareaAutosize
                                                className={classes.textArea}
                                                name='Hobbies_Interest'
                                                onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => handleFormDataChange(e)}
                                                value={formData.Hobbies_Interest}
                                                placeholder='Enter your hobbies interest'
                                            />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <TextareaAutosize
                                                className={classes.textArea}
                                                name='Declaration'
                                                onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => handleFormDataChange(e)}
                                                value={formData.Declaration}
                                                placeholder='Enter your declaration'
                                            />
                                        </Grid>
                                        <Grid item xs={12} md={6}>
                                            <InputLabel>Enter your place</InputLabel>
                                            <TextField
                                                fullWidth
                                                className={classes.text}
                                                name='place'
                                                label='Place'
                                                value={formData.place}
                                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleFormDataChange(e)}
                                            />
                                        </Grid>
                                        <Grid item xs={12} md={6}>
                                            <InputLabel>Enter today's date</InputLabel>
                                            <TextField
                                                fullWidth
                                                className={classes.text}
                                                name='date'
                                                type='date'
                                                value={formData.date}
                                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleFormDataChange(e)}
                                            />
                                        </Grid>
                                        <Grid item xs={12} sx={{ display: 'flex' }}>
                                            <Button
                                                variant='contained'
                                                size='large'
                                                color='success'
                                                sx={{ margin: '0 auto', fontSize: '1.2rem' }}
                                                onClick={onAllDataSubmit}
                                            >
                                                Submit
                                            </Button>
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
                                        show && <iframe style={{ width: '100%', height: '100%' }} src='http://localhost:4000/cv/template_2' />
                                    }
                                </Box>
                            </Grid> : null
                    }
                </Grid>
            </Box>
        </>
    )
}

export default Template_2