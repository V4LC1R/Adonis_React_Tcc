'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */
const Brand=use('App/Models/Brand')

const Class=use('App/Models/Class')
/**
 * Resourceful controller for interacting with brands
 */
class BrandController {
  /**
   * Show a list of all brands.
   * GET brands
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({request, response, view }) {

    const data=request.only(['need'])

    const brand = Brand.query().has(`${data.need}`).fetch();

    return brand;

  }

  /**
   * Create/save a new brand.
   * POST brands
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
    const data = request.only(['class_id','brand_name','abbreviation']);

    const brand=await Brand.findOrCreate({brand_name:data.brand_name},data)

    return brand
   
  }

  /**
   * Display a single brand.
   * GET brands/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {

    const brand=await Brand.find(params.id)
   
    
    return brand
  }


  /**
   * Update brand details.
   * PUT or PATCH brands/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
    const brand = await Brand.findOrFail(params.id);

    const data= request.only([
      'class_id',
      'brand_name',
      'abbreviation'
    ])

    brand.marge(data);

    await brand.save()

    return brand

  }

  /**
   * Delete a brand with id.
   * DELETE brands/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, auth, response }) {
    const brand = await Brand.findOrFail(params.id)
    const user= await User.find(auth.user.id)
  
    if ( user.adminAcess!==1 ) {
      return response.status(401).send({ error: 'Not authorized' })
    }
  
    await brand.delete()
  }
}

module.exports = BrandController
