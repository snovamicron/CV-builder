import { 
    BrowserRouter as Router,
    Routes,
    Route
} from 'react-router-dom'


// components
import Template from "./Home/Template"
import Welcome from "./Home/Welcome"

const Home = ()=>{
    return(
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<Welcome/>} />
                    <Route path="/template" element={<Template/>} />
                </Routes>
            </Router>
        </>
    )
}

export default Home