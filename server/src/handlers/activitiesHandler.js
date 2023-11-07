const {createActivity , getAllActivities} = require('../controllers/activitiesController.js')

const postActivitiesHandler = async(req , res)=>{
    const {countryName, name, difficulty , duration , season} = req.body
    try {
        const newActivity = await createActivity(countryName, name, difficulty , duration , season)
        res.status(200).json(newActivity)
    } catch (error) {
        res.status(400).json({error : error.message})
    }
    
}

const getActivitiesHandler = async(req , res)=>{
    try {
        const activities = await getAllActivities(); 
        res.status(200).json(activities);
    } catch (error) {
        res.status(400).json({error:error.message})
    }
    
}

module.exports = {
    postActivitiesHandler,
    getActivitiesHandler
    
}