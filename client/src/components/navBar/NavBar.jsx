import './navBar.css'
const NavBar = ({ handleChange, handleSubmit }) => {
    return (
        <div className='search-box'>
            <form onChange={handleChange}>
                <input type="search" placeholder='Búsqueda' />
                <button type="submit" onClick={handleSubmit}>Buscar</button>
            </form>



        </div>
    )
}

export default NavBar;