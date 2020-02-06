'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PiecesSchema extends Schema {
  up () {
    this.create('pieces', (table) => {
      table.increments()
      table
        .integer('brand_id')
        .unsigned()
        .references('id')
        .inTable('brands')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      table.string('piece_name')
      table.string('code').unique()
      table.string('price')
      table.string('thumbnail')
      table.timestamps()
    })
  }

  down () {
    this.drop('pieces')
  }
}

module.exports = PiecesSchema
