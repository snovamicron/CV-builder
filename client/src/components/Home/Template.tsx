import { 
  useNavigate,
  BrowserRouter as Router,
  Routes,
  Route
 } from 'react-router-dom'

// components
import Navbar from './Template/Navbar'

// MUI components
import { Button, Box } from '@mui/material'


const Template = () => {
  const navigate = useNavigate()
  return (
    <>
      <Navbar/>
      <Box sx={{marginTop:15}}>
      <Button onClick={()=>navigate('/template_1')} color='success' size='large' variant='contained'>Template 1</Button>
      <Button onClick={()=>navigate('/template_2')} color='success' size='large' variant='contained'>Template 2</Button>
      </Box>
    </>
  )
}

export default Template