import './card.css'
import { Link } from 'react-router-dom';

const Card = ({ country }) => {
    const { imageFlag, name, continent, id, capital, subregion, area, population, detail } = country;

    // if (detail == true) {
    //     return (
    //         <div className='card-container'>
    //             <img src={imageFlag} alt={`Bandera de ${name}`} />
    //             <h3>{name}</h3>
    //             <p>{continent}</p>
    //             <p>{id}</p>
    //             {/* <p>{capital}</p> */}
    //             <p>{subregion}</p>
    //             <p>{area}</p>
    //             <p>{population}</p>
    //         </div >
    //     )

    // }


    return (

        <div className='card-container'>
            <img src={imageFlag} alt={`Bandera de ${name}`} />
            <Link to={`/home/${id}`}><h3>{name}</h3></Link>
            <p>{continent}</p>
        </div >
    )
}


export default Card;