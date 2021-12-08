exports.up = async function (knex) {
  // DO YOUR MAGIC
  await knex.schema.createTable("cars", table => {
    table.increments()    
    table.string("vin",17).unique().notNullable()
    table.string("make",120).notNullable()
    table.string("model").notNullable()
    table.decimal("mileage").notNullable()
    table.string("title", 128)
    table.string("transmission")
  })

};

exports.down = async function (knex) {
  // DO YOUR MAGIC
  await knex.schema.dropTableIfExists('cars')
};

