'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ConversionsSchema extends Schema {
  up () {
    this.create('conversions', (table) => {
      table.increments()
      table
        .integer('piece_id_a')
        .unsigned()
        .references('id')
        .inTable('pieces')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      table
        .integer('piece_id_b')
        .unsigned()
        .references('id')
        .inTable('pieces')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      table.string('piece_name')
      table.timestamps()
    })
  }

  down () {
    this.drop('conversions')
  }
}

module.exports = ConversionsSchema
