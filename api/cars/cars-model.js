const db = require('../../data/db-config');
const knex = require('knex');

const getAll = () => {
  // DO YOUR MAGIC
  return db('cars')
}

const getById =  (id) => {
  // DO YOUR MAGIC
  return db('cars')	  
  .where('id', id ).first()	    
}


const create = async ({ vin, make, model, mileage, title, transmission }) => {
  // DO YOUR MAGIC
  const [id] = await db('cars').insert({ vin, make, model, mileage, title, transmission })
  return getById(id) 
}
module.exports = {
  getAll,
  getById,
  create,
  
}