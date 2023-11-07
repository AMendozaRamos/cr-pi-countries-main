import './home.css'
import NavBar from '../../components/navBar/NavBar';
import Cards from '../../components/cards/Cards';
import {useDispatch ,useSelector} from 'react-redux'
import {useEffect } from 'react';
import { getAllCountries } from '../../redux/actions/actions';


const Home = () => {

    const dispatch = useDispatch();
    const countries = useSelector((state)=>{ return state.getCountries})

    useEffect(()=>{
        dispatch(getAllCountries());
    }, [dispatch])

    return (
        <div className='home'>
            <h2 className='home-title'>Home</h2>
            <NavBar />
            <Cards countries = {countries} />
        </div>
    )
}

export default Home;
