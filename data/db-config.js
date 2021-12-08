// no need to change this file
const knex = require('knex')
const configs = require('../knexfile.js')
const currentEnv = process.env.NODE_ENV || 'development'
 const configToUse = configs[currentEnv]

 const connection = knex(configToUse)



module.exports = connection
