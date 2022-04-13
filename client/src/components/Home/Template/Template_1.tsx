import { useState } from 'react'

// MUI components
import {
    Box,
    Grid,
    useMediaQuery,
    TextField,
    TextareaAutosize,
    Button,
    Chip
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
    interface listsInterface {
        skills: boolean,
        languages: boolean,
        contacts: boolean
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
    const [lists, setLists] = useState<listsInterface>({ skills: false, languages: false, contacts: false })
    const [listData, setListData] = useState<listsDataInterface>({ skillsList: '', languagesList: '', contactsList: '' })
    const onDataChange = (e: any): void => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }
    const onListTextChange = (e:any):void => {
        setListData({...listData, [e.target.name]:e.target.value})
    }
    const onListDataChange = (e: any): void => {
        if(e.key === 'Enter'){
            setListData({...listData, [e.target.name]:''})
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
    const onListChange = (e: any): void => {
        setLists({ ...lists, [e.target.name]: true })
    }
    const onChipDelete = (ele:string, arrName:string):void => {
        switch (arrName) {
            case 'skills':
                if(formData.skills.some(element => element === ele)){
                    const skills = formData.skills.filter(element => element !== ele)
                    setFormData({ ...formData, skills })
                }
                break;
            case 'languages':
                if(formData.languages.some(element => element === ele)){
                    const languages = formData.languages.filter(element => element !== ele)
                    setFormData({ ...formData, languages })
                }
                break;
            case 'contacts':
                if(formData.contacts.some(element => element === ele)){
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
                                        onClick={(e) => onListChange(e)}
                                        name='skills'
                                    >
                                        add skills
                                    </Button>
                                    {
                                        lists.skills && <TextField value={listData.skillsList} name='skillsList' onChange={(e)=> onListTextChange(e)} onKeyUp={(e) => onListDataChange(e)} label='Enter skills' sx={{ margin: '10px 0' }} fullWidth size='small' />
                                    }
                                    {
                                        formData.skills.length !== 0 && 
                                        formData.skills.map((ele, index)=>{
                                            return (
                                                <Chip sx={{margin:'3px'}} color='success' key={index} label={ele} onDelete={()=>onChipDelete(ele, 'skills')}/>
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
                                        lists.languages && <TextField value={listData.languagesList} name='languagesList' onChange={(e)=> onListTextChange(e)} onKeyUp={(e) => onListDataChange(e)} label='Enter languages' sx={{ margin: '10px 0' }} fullWidth size='small' />
                                    }
                                    {
                                        formData.languages.length !== 0 && 
                                        formData.languages.map((ele, index)=>{
                                            return (
                                                <Chip sx={{margin:'3px'}} color='success' key={index} label={ele} onDelete={()=>onChipDelete(ele, 'languages')}/>
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
                                        lists.contacts && <TextField value={listData.contactsList} name='contactsList' onChange={(e)=> onListTextChange(e)} onKeyUp={(e) => onListDataChange(e)} label='Enter contacts' sx={{ margin: '10px 0' }} fullWidth size='small' />
                                    }
                                    {
                                        formData.contacts.length !== 0 && 
                                        formData.contacts.map((ele, index)=>{
                                            return (
                                                <Chip sx={{margin:'3px'}} color='success' key={index} label={ele} onDelete={()=>onChipDelete(ele, 'contacts')}/>
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