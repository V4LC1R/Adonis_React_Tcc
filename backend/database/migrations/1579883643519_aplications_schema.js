'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AplicationsSchema extends Schema {
  up () {
    this.create('aplications', (table) => {
      table.increments()
      table
        .integer('piece_id')
        .unsigned()
        .references('id')
        .inTable('pieces')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
        table
        .integer('car_id')
        .unsigned()
        .references('id')
        .inTable('cars')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      table.string('description')
      table.timestamps()
    })
  }

  down () {
    this.drop('aplications')
  }
}

module.exports = AplicationsSchema
