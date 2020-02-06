'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Aplication extends Model {
    piece(){
        return this.belongsTo('App/Models/Piece')
    }
    car(){
        return this.belongsTo('App/Models/Car')
    }
}

module.exports = Aplication
