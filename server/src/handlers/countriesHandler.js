const { getAllCountries, getByName , getById} = require('../controllers/countriesController.js')

const getcountriesHandler = async (req, res) => {
    const { name } = req.query;
    try {
        if (name) {
            const countryByName = await getByName(name)
            if (countryByName != null) {
                return res.status(200).json(countryByName)
            } else {
                return res.status(400).send("Nombre no encontrado")
            }
        }
        const countries = await getAllCountries();
        res.status(200).json(countries);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}


const getDetailHandler = async (req, res) => {
    const { idPais } = req.params;
    try {
        const countryById = await getById(idPais);
        res.status(200).json(countryById)
    } catch (error) {
        res.status(400).json({error:error.message})
    }
}

module.exports = {
    getcountriesHandler,
    getDetailHandler
}