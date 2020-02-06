'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with pieces
 */
const Piece=use('App/Models/Piece');
const User=use('App/Models/User')
const Helpers = use('Helpers');

class PieceController {
  /**
   * Show a list of all pieces.
   * GET pieces
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    const piece = Piece.query().with('brand').with('aplications').fetch();

    return piece
 
  }

  async store ({ request, response }) {
    const data = request.only(['piece_name','code','brand_id','price','thumbnail']);

    const profilePic = request.file('thumbnail', {
    types: ['image'],
    size: '2mb'
  })

  await profilePic.move(Helpers.tmpPath('uploads'), {
    name:`${data.code}-${Date.now()}-${profilePic.clientName}`,
    overwrite: true
  })

  if (!profilePic.moved()) {
    return profilePic.error()
  }

  data.thumbnail=`${profilePic.fileName}`;
    const piece=Piece.create(data)

    return piece
  }

  async show ({ params, request, response, view }) {
    
    const piece= await Piece.find(params.id);


    return piece;
  }

  async update ({ params, request }) {
    const piece= Piece.findOrFail(params.id)

    const data= request.only([
      'piece_name',
      'code',
      'brand_id',
      'price',
      'thumbnail'
    ])

    piece.marge(data);

    await piece.save()

    return piece

  }

  async destroy ({ params, auth, response }) {

    const piece = await Piece.findOrFail(params.id)
    const user= await User.find(auth.user.id)
  
    if ( user.adminAcess!==1 ) {
      return response.status(401).send({ error: 'Not authorized' })
    }
  
    await piece.delete()
  }
}

module.exports = PieceController
