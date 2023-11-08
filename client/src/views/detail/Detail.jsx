import './detail.css'
import Cards from '../../components/cards/Cards';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getById } from '../../redux/actions/actions';
import { useEffect } from 'react';




const Detail = () => {
    const dispatch = useDispatch()
    const countries = useSelector((state) => { return state.getCountries })

    const { id } = useParams();
    const idPais = id
    useEffect(() => {
        dispatch(getById(idPais));
    }, [dispatch, id])

    return (
        <div>
            <p>Estas en el Detail</p>
            <Cards countries={countries} />
        </div>
    )
}

export default Detail;