'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Brand extends Model {
    class(){
        return this.belongsTo('App/Models/Class')
    }
    pieces(){
        return this.hasMany('App/Models/Piece')
    }
    cars(){
        return this.hasMany('App/Models/Car')
    }
}
module.exports = Brand
