'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */
const Aplication=use('App/Models/Aplication')
const User=use('App/Models/User');
/**
 * Resourceful controller for interacting with aplications
 */
class AplicationController {

  async index ({ request, response, view }) {
  const aplication = await Aplication.query().with('piece').with('car').fetch()

  return aplication;

  }

  async store ({ request, response }) {
    const data=request.only(['car_id','piece_id','description']);

    const aplication=await Aplication.findOrCreate({car_id:data.car_id,piece_id:data.piece_id},data)

    return aplication
  }
  async show ({ params, request, response, view }) {

    const aplication= Aplication.find(params.id)


    return aplication
 
  }

  async update ({ params, request, response }) {
    const aplication=await Aplication.findOrFail(params.id);

    const data = request.only([
      'car_id',
      'piece_id',
      'description'
    ])
     aplication.marge(data);

     await aplication.save()

     return aplication
    
  }

  async destroy ({ params, auth, response }) {



  }
}

module.exports = AplicationController
