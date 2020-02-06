'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class BrandsSchema extends Schema {
  up () {
    this.create('brands', (table) => {
      table.increments()
      table
        .integer('class_id')
        .unsigned()
        .references('id')
        .inTable('classes')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      table.string('brand_name').unique()
      table.string('abbreviation')
      table.timestamps()
    })
  }

  down () {
    this.drop('brands')
  }
}

module.exports = BrandsSchema
