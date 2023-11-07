import './card.css'

const Card = ({ country }) => {
    const { imageFlag, name, continent } = country;
    return (
        <div className='card-container'>
            <img src={imageFlag} alt={`Bandera de ${name}`} />
            <p>{name}</p>
            <p>{continent}</p>
        </div>
    )
}

// const Card = ({country}) => {
//         const {name} = country;
//         return (
//             <div className='card-container'>
//                 <p>{name}</p>

//             </div>
//         )
//     }

export default Card;