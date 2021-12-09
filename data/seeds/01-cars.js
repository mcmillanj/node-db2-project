// STRETCH
const cars= [

{

    vin: '11111111111111111',
    make: 'toyota',
    model: 'prius',
    mileage: "215000",
    title: "clean",
    transmission: 'manual',
},
{

    vin: '12436589741256321',
    make: 'toyota',
    model: 'corolla',
    mileage: "115000",
    title: "salvage",
    transmission: 'manual',
},
{
    vin: '15324681239745682',
    make: 'ford',
    model: 'focus',
    mileage: "15000",
    },
]


// exports.seed = function(knex){
//   return knex('cars').insert(cars).truncate().then(() => {
// return knex('cars').insert(cars)

//   })  
// }
exports.seed = async function(knex){
    await knex('cars').insert(cars).truncate()
  await knex('cars').insert(cars)
  
    }  
  