import './home.css'
import NavBar from '../../components/navBar/NavBar';
import Cards from '../../components/cards/Cards';
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react';
import { getAllCountries } from '../../redux/actions/actions';
import { getByName } from '../../redux/actions/actions';
import Select from '../../components/select/Select';
import { filterContinent } from '../../redux/actions/actions';
import { orderCountries } from '../../redux/actions/actions';



const Home = () => {

    const dispatch = useDispatch();
    const countries = useSelector((state) => { return state.getCountries })

    useEffect(() => {
        dispatch(getAllCountries());
    }, [dispatch])

    const [searchCountry, setSearchCountry] = useState("")

    const handleChange = (event) => {
        event.preventDefault();
        setSearchCountry(event.target.value)

    }

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(getByName(searchCountry))

    }


    const handleChange2 = (event) => {
        if (event.target.name === 'filter') {
            dispatch(filterContinent(event.target.value));
        } else {
            dispatch(orderCountries(event.target.value));
        }
    }

    return (
        <div className='home'>
            <h2 className='home-title'>Home</h2>
            <NavBar handleChange={handleChange} handleSubmit={handleSubmit} />
            <Select name='filter' values={['Americas', 'Africa','Asia','Europe','Oceania']} handleChange={handleChange2} />
            <Select name='order' values={['Ascendente', 'Descendente', 'Population']} handleChange={handleChange2} />
            <Cards countries={countries} />

        </div>
    )
}

export default Home;
