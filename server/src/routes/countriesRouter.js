const { Router } = require("express");
const {getcountriesHandler , getDetailHandler} = require('../handlers/countriesHandler.js');

const countriesRouter = Router();


countriesRouter.get('/', getcountriesHandler)

countriesRouter.get('/:idPais', getDetailHandler )




module.exports = countriesRouter;