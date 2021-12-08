// DO YOUR MAGIC
const router = require('express').Router()
 const knex = require('knex');
const cars = require('./cars-model')

const { checkCarId,
    checkCarPayload,
    checkVinNumberValid,
    checkVinNumberUnique } = require('./cars-middleware');

 //const router = express.Router();

router.get('/', (req , res ) => {
    cars.getAll()
        .then(totalCars => {
            console.log('getting all cars');
            res.status(200).json(totalCars)
        })
        .catch(err => {
            res.json({ message: err.message })
        })
          
})

router.get('/api/cars/:id', checkCarId, (req, res,next) => {
    const { id } = req.params;
    cars.getById(id)
        .then(car => {
            res.status(200).json(car)
        })
        .catch(err => {
            res.json({ message: err.message })
        })
})


router.post('/api/cars',checkCarPayload, checkVinNumberValid, checkVinNumberUnique,
     ( req, res, next) => {
        const newCar = req.body
        cars.create(newCar)
            .then(car => {
                res.status(200).json(car)
            })
            .catch(err => {
                res.json({ message: err.message })
            })
    })


module.exports = router; 
