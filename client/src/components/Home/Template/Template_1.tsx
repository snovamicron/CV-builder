import { useState } from 'react'

// MUI components
import {
    Box,
    Grid,
    useMediaQuery,
    TextField,
    TextareaAutosize,
    Button
} from '@mui/material'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { useTheme } from '@mui/material/styles'
import { makeStyles } from '@mui/styles'


const Template_1 = () => {
    interface porjectInterface {
        porjectName: string[],
        porjectDescription: string
    }
    interface formDataInterface {
        name: string,
        bio: string,
        experience: string,
        education: string,
        skills: string[],
        languages: string[],
        contacts: string[],
        projects: porjectInterface[]
    }
    const [formData, setFormData] = useState<formDataInterface>({
        name: '',
        bio: '',
        experience: '',
        education: '',
        skills: [],
        languages: [],
        contacts: [],
        projects: []
    })
    const onDataChange = (e: any): void => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }
    const theme = useTheme()
    const matches = useMediaQuery(theme.breakpoints.up('md'))
    const useStyles = makeStyles({
        components: {
            border: '2px solid #000',
            height: '100%',
            padding: 10,
            boxSizing: 'border-box'
        }
    })
    const classes = useStyles()
    return (
        <>
            <Grid container sx={{ height: '100%', padding: '10px 10px' }} columnSpacing={{ xs: 1 }} >
                <Grid item xs={12} md={7} >
                    <Box className={classes.components}>
                        <Grid container spacing={{ xs: 2 }}>
                            <Grid item xs={12} lg={7}>
                                <TextField
                                    fullWidth
                                    label='name'
                                    value={formData.name}
                                    name='name'
                                    onChange={(e) => onDataChange(e)}
                                />
                            </Grid>
                            <Grid item xs={12} lg={5}>
                                <TextareaAutosize
                                    placeholder='bio'
                                    style={{ width: '100%' }}
                                    minRows={3}
                                    value={formData.bio}
                                    name='bio'
                                    onChange={(e) => onDataChange(e)}
                                />
                            </Grid>
                            <Grid item xs={12} lg={6}>
                                <TextareaAutosize
                                    placeholder='education'
                                    style={{ width: '100%' }}
                                    minRows={3}
                                    value={formData.education}
                                    name='education'
                                    onChange={(e) => onDataChange(e)}
                                />
                            </Grid>
                            <Grid item xs={12} lg={6}>
                                <TextareaAutosize
                                    placeholder='experience'
                                    style={{ width: '100%' }}
                                    minRows={3}
                                    value={formData.experience}
                                    name='experience'
                                    onChange={(e) => onDataChange(e)}
                                />
                            </Grid>
                            <Grid item xs={12} lg={4}>
                                <Box>
                                    <Button
                                        variant='outlined'
                                        startIcon={<AddCircleOutlineIcon />}
                                        size='medium'
                                    >
                                        add skills
                                    </Button>

                                </Box>
                            </Grid>
                            <Grid item xs={12} lg={4}>
                                <Box>
                                    <Button
                                        variant='outlined'
                                        startIcon={<AddCircleOutlineIcon />}
                                        size='medium'
                                    >
                                        add languages
                                    </Button>
                                </Box>
                            </Grid>
                            <Grid item xs={12} lg={4}>
                                <Box>
                                    <Button
                                        variant='outlined'
                                        startIcon={<AddCircleOutlineIcon />}
                                        size='medium'
                                    >
                                        add contacts
                                    </Button>
                                </Box>
                            </Grid>
                        </Grid>
                    </Box>
                </Grid>
                {
                    matches &&
                    <Grid item xs={12} md={5}>
                        <Box className={classes.components}>prevew</Box>
                    </Grid>
                }
            </Grid>
        </>
    )
}

export default Template_1