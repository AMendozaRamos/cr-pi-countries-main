const { Activity , Country} = require('../db.js')
const {Op}= require('sequelize')

const createActivity = async(countryName, name, difficulty, duration, season) => {
    const countryDb = await Country.findOne({ where: { name: { [Op.iLike]: countryName } } })
    const countryId = countryDb.id;

    const activity = await Activity.create({
        name:name,
        difficulty:difficulty,
        duration: duration,
        season: season
    })
    console.log(countryId)
    await activity.setCountries(countryId)
    return activity;

}

const getAllActivities = async()=>{
    const activities = await Activity.findAll()
    return activities;

}

module.exports = {
    createActivity,
    getAllActivities
}