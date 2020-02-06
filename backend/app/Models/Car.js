'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Car extends Model {
    brand(){
        return this.belongsTo('App/Models/Brand')
    }

    possible_pieces(){
        return this.belongsToMany('App/Models/Piece').pivotTable('aplications')
    }
}

module.exports = Car
