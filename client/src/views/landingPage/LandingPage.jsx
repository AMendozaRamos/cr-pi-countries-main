import './landingPage.css'
import { Link } from 'react-router-dom';

const LandingPage = () => {

    return (
        <div className='background'>
            <div>
                <Link to='home'><button className='home-page'>Home Page</button></Link>
                
            </div>
        </div>

    )
}

export default LandingPage;