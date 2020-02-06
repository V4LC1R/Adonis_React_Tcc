'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Class extends Model {
    brands(){
        return this.hasMany('App/Models/Brand');
    }
}

module.exports = Class
