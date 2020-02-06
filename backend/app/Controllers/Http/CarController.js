'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */
const Car=use('App/Models/Car')
const User=use('App/Models/User')
/**
 * Resourceful controller for interacting with cars
 */
class CarController {
  /**
   * Show a list of all cars.
   * GET cars
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    const car = Car.query().with('brand').with('possible_pieces').fetch();


    return car
  }
  /**
   * Create/save a new car.
   * POST cars
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {

    const data=request.only(['car_name','brand_id'])

    const car=await Car.findOrCreate({car_name:data.car_name},data)

    return car
  }

  /**
   * Display a single car.
   * GET cars/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
    const car= Car.find(params.id);

    return car
  }

  async update ({ params, request, response }) {
    const car= Car.findOrFail(params.id);

    const data= request.only([
      'car_name',
      'brand_id'
    ]);

    car.marge(data);

    await car.save();

    return car

  }

  /**
   * Delete a car with id.
   * DELETE cars/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params,auth, response }) {


    const car = await Car.findOrFail(params.id)
    const user= await User.find(auth.user.id)
  
    if ( user.adminAcess!==1 ) {
      return response.status(401).send({ error: 'Not authorized' })
    }
  
    await car.delete()
  }
}

module.exports = CarController
