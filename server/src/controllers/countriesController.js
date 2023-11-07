const { Country } = require('../db.js')
const { Op } = require('sequelize')

const getAllCountries = async () => {
    return await Country.findAll();
}

const getByName = async (name) => {
    return await Country.findOne({ where: { name: { [Op.iLike]: name } } })
}

const getById = async (idPais) => {
    return await Country.findOne({ where: { id: { [Op.iLike]: idPais } } })
}


module.exports = {
    getAllCountries,
    getByName,
    getById
}

