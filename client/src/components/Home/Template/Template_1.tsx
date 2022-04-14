import { useState } from 'react'

// MUI components
import {
    Box,
    Grid,
    useMediaQuery,
    TextField,
    TextareaAutosize,
    Button,
    Chip,
    Card,
    CardHeader,
    CardContent,
    Typography,
    IconButton
} from '@mui/material'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import CloseIcon from '@mui/icons-material/Close';
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
    interface listsInterface {
        skills: boolean,
        languages: boolean,
        contacts: boolean,
        projects: boolean
    }
    interface listsDataInterface {
        skillsList: string,
        languagesList: string,
        contactsList: string
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
    const [projects, setProjects] = useState<porjectInterface>({
        porjectName: [''],
        porjectDescription: ''
    })
    const [lists, setLists] = useState<listsInterface>({ skills: false, languages: false, contacts: false, projects: false })
    const [listData, setListData] = useState<listsDataInterface>({ skillsList: '', languagesList: '', contactsList: '' })
    const onDataChange = (e: any): void => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }
    const onListTextChange = (e: any): void => {
        setListData({ ...listData, [e.target.name]: e.target.value })
    }
    const onListDataChange = (e: any): void => {
        if (e.key === 'Enter') {
            setListData({ ...listData, [e.target.name]: '' })
            switch (e.target.name) {
                case 'skillsList':
                    setFormData({ ...formData, skills: [...formData.skills, e.target.value] })
                    break;
                case 'languagesList':
                    setFormData({ ...formData, languages: [...formData.languages, e.target.value] })
                    break;
                case 'contactsList':
                    setFormData({ ...formData, contacts: [...formData.contacts, e.target.value] })
                    break;

                default:
                    setFormData({ ...formData })
                    break;
            }
        }
    }
    const onProjectsDataChange = (): void => {
        if (formData.projects.length < 4) {
            setFormData({ ...formData, projects: [...formData.projects, projects] })
            setProjects({
                porjectName: [''],
                porjectDescription: ''
            })
        }
    }
    const onProjectsDelete = (index:number): void => {
            const filterProjects = formData.projects.filter((ele, i) => index !== i)
            setFormData({ ...formData, projects: filterProjects })
    }
    const onListChange = (e: any): void => {
        setLists({ ...lists, [e.target.name]: true })
    }
    const onChipDelete = (ele: string, arrName: string): void => {
        switch (arrName) {
            case 'skills':
                if (formData.skills.some(element => element === ele)) {
                    const skills = formData.skills.filter(element => element !== ele)
                    setFormData({ ...formData, skills })
                }
                break;
            case 'languages':
                if (formData.languages.some(element => element === ele)) {
                    const languages = formData.languages.filter(element => element !== ele)
                    setFormData({ ...formData, languages })
                }
                break;
            case 'contacts':
                if (formData.contacts.some(element => element === ele)) {
                    const contacts = formData.contacts.filter(element => element !== ele)
                    setFormData({ ...formData, contacts })
                }
                break;

            default:
                setFormData({ ...formData })
                break;
        }
    }
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
        textArea: {
            padding: '10px 14px',
            boxSizing: 'border-box',
            width: '100%',
            maxWidth: '100%',
            fontWeight: 400,
            fontSize: '1rem',
            borderRadius: 5
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
                                    className={classes.textArea}
                                    placeholder='bio (max 180 characters)'
                                    minRows={1.8}
                                    value={formData.bio}
                                    name='bio'
                                    onChange={(e) => onDataChange(e)}
                                    maxLength={180}
                                />
                            </Grid>
                            <Grid item xs={12} lg={6}>
                                <TextareaAutosize
                                    className={classes.textArea}
                                    placeholder='education (max 130 characters)'
                                    minRows={1.8}
                                    value={formData.education}
                                    name='education'
                                    onChange={(e) => onDataChange(e)}
                                    maxLength={130}
                                />
                            </Grid>
                            <Grid item xs={12} lg={6}>
                                <TextareaAutosize
                                    className={classes.textArea}
                                    placeholder='experience (max 130 characters)'
                                    minRows={1.8}
                                    value={formData.experience}
                                    name='experience'
                                    onChange={(e) => onDataChange(e)}
                                    maxLength={130}
                                />
                            </Grid>
                            <Grid item xs={12} lg={4}>
                                <Box>
                                    <Button
                                        variant='outlined'
                                        startIcon={<AddCircleOutlineIcon />}
                                        size='medium'
                                        onClick={(e) => onListChange(e)}
                                        name='skills'
                                    >
                                        add skills
                                    </Button>
                                    {
                                        lists.skills && <TextField value={listData.skillsList} name='skillsList' onChange={(e) => onListTextChange(e)} onKeyUp={(e) => onListDataChange(e)} label='Enter skills' sx={{ margin: '10px 0' }} fullWidth size='small' />
                                    }
                                    {
                                        formData.skills.length !== 0 &&
                                        formData.skills.map((ele, index) => {
                                            return (
                                                <Chip sx={{ margin: '3px' }} color='success' key={index} label={ele} onDelete={() => onChipDelete(ele, 'skills')} />
                                            )
                                        })
                                    }
                                </Box>
                            </Grid>
                            <Grid item xs={12} lg={4}>
                                <Box>
                                    <Button
                                        variant='outlined'
                                        startIcon={<AddCircleOutlineIcon />}
                                        size='medium'
                                        onClick={(e) => onListChange(e)}
                                        name='languages'
                                    >
                                        add languages
                                    </Button>
                                    {
                                        lists.languages && <TextField value={listData.languagesList} name='languagesList' onChange={(e) => onListTextChange(e)} onKeyUp={(e) => onListDataChange(e)} label='Enter languages' sx={{ margin: '10px 0' }} fullWidth size='small' />
                                    }
                                    {
                                        formData.languages.length !== 0 &&
                                        formData.languages.map((ele, index) => {
                                            return (
                                                <Chip sx={{ margin: '3px' }} color='success' key={index} label={ele} onDelete={() => onChipDelete(ele, 'languages')} />
                                            )
                                        })
                                    }
                                </Box>
                            </Grid>
                            <Grid item xs={12} lg={4}>
                                <Box>
                                    <Button
                                        variant='outlined'
                                        startIcon={<AddCircleOutlineIcon />}
                                        size='medium'
                                        onClick={(e) => onListChange(e)}
                                        name='contacts'
                                    >
                                        add contacts
                                    </Button>
                                    {
                                        lists.contacts && <TextField value={listData.contactsList} name='contactsList' onChange={(e) => onListTextChange(e)} onKeyUp={(e) => onListDataChange(e)} label='Enter contacts' sx={{ margin: '10px 0' }} fullWidth size='small' />
                                    }
                                    {
                                        formData.contacts.length !== 0 &&
                                        formData.contacts.map((ele, index) => {
                                            return (
                                                <Chip sx={{ margin: '3px' }} color='success' key={index} label={ele} onDelete={() => onChipDelete(ele, 'contacts')} />
                                            )
                                        })
                                    }
                                </Box>
                            </Grid>
                            <Grid item xs={12}>
                                <Box>
                                    <Button
                                        variant='outlined'
                                        startIcon={<AddCircleOutlineIcon />}
                                        size='medium'
                                        onClick={(e) => onListChange(e)}
                                        name='projects'
                                    >
                                        add projects
                                    </Button>
                                    {
                                        lists.projects &&
                                        <>
                                            <Typography sx={{ marginTop: 1, fontSize: '1.4rem' }}>Maximum 4 projects can be taken</Typography>
                                            <TextField value={projects.porjectName[0]} onChange={(e) => setProjects({ ...projects, porjectName: [e.target.value] })} label='Enter Project name' sx={{ margin: '10px 0' }} fullWidth size='small' />
                                            <TextareaAutosize onChange={(e) => setProjects({ ...projects, porjectDescription: e.target.value })} value={projects.porjectDescription} className={classes.textArea} minRows={1.2} placeholder='Enter description (max 230 characters)' maxLength={230} />
                                            <Button
                                                variant='contained'
                                                size='small'
                                                color='success'
                                                sx={{ marginTop: 1, marginBottom: 2 }}
                                                onClick={onProjectsDataChange}
                                            >
                                                add
                                            </Button>
                                        </>
                                    }
                                    {
                                        formData.projects.length !== 0 &&
                                        formData.projects.map((ele, index) => {
                                            return (
                                                    <Card key={index} sx={{ backgroundColor: 'blue', margin: '10px 0', color:'#fff' }}>
                                                    <CardHeader 
                                                    sx={{ padding: '10px 16px' }} 
                                                    title={ele.porjectName[0]}
                                                    action={
                                                        <IconButton onClick={()=>onProjectsDelete(index)} color='inherit'>
                                                            <CloseIcon/>    
                                                        </IconButton>
                                                    } 
                                                    />
                                                    <CardContent>{ele.porjectDescription}</CardContent>
                                                </Card>
                                            )
                                        })
                                    }
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