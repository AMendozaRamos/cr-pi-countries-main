import './cards.css'
import Card from '../card/Card';
const Cards = ({ countries }) => {

    const cardsCountries = countries;

    // const cardsCountries = countries?.map((country)=>(<Card country={country}/>))
    // {cardsCountries}
    return (
        <div className='card-list'>
            {cardsCountries?.map((country) => (<Card country={country} />))}
        </div>
    )
}

export default Cards;