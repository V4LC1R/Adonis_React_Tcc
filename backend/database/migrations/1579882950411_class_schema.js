'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ClassSchema extends Schema {
  up () {
    this.create('classes', (table) => {
      table.increments();
      table.string('class_name');
      table.string('description_class');
      table.timestamps();
    })
  }

  down () {
    this.drop('classes')
  }
}

module.exports = ClassSchema
