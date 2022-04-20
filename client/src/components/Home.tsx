import { 
    BrowserRouter as Router,
    Routes,
    Route
} from 'react-router-dom'


// components
import Template from "./Home/Template"
import Welcome from "./Home/Welcome"
import Template_1 from './Home/Template/Template_1'
import Template_2 from './Home/Template/Template_2'


const Home = ()=>{
    return(
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<Welcome/>} />
                    <Route path="/template" element={<Template/>} />
                    <Route path="/template_1" element={<Template_1/>} />
                    <Route path="/template_2" element={<Template_2/>} />
                </Routes>
            </Router>
        </>
    )
}

export default Home