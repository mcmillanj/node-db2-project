const cars = require('./cars-model')
const db = require('../../data/db-config');
 
 const vinValidator = require('vin-validator')

const checkCarId = async (req, res, next) => {
  try{
    const car = await cars.getById(req.params.id)
    if(!car){
      res.status(404).json('account not found')
    } else
    req.car = car
      next()
  } catch(err){
    next(err)
  } 
}

const checkCarPayload = (req, res, next) => {
  if (!req.body.vin) {
    res.status(400).json({ message: 'vin is missing!' })
  } else if (!req.body.make) {
    res.status(400).json({ message: 'make is missing!' })
  } else if (!req.body.model) {
    res.status(400).json({ message: 'model is missing!' })
  } else if (!req.body.mileage) {
    res.status(400).json({ message: 'mileage is missing!' })
  } else {
    next()
  }
}


const checkVinNumberValid = (req, res, next) => {
  var isValidVin = vinValidator.validate(req.body.vin)

  if (isValidVin) {
    next()
  } else {
    res.status(400).json({ message: `vin ${req.body.vin} is invalid!` })
  }
}


const checkVinNumberUnique = async(req, res, next) => {
  
    db('cars').where({
       vin: req.body.vin })
       .first()
    .then(existing => {
    if(!existing) {
      next()
    } else {
      next({ status:400, message: `vin ${req.body.vin} already exists`})
    }
  })
   .catch(err => {
    res.json({ message: err.message })
  })
}


module.exports = {
  checkCarId,
  checkCarPayload,
  checkVinNumberValid,
  checkVinNumberUnique
  
}	
