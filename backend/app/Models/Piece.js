'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Piece extends Model {
    brand(){
        return this.belongsTo('App/Models/Brand');
    }

    aplications(){
        return this.belongsToMany('App/Models/Car').pivotTable('aplications')
    }
    conversion(){
        return this.hasMany('App/Models/Coversion')
    }
}

module.exports = Piece
