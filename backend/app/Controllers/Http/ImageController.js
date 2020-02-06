'use strict'
const Helpers = use('Helpers')
const Image=use('App/Models/Image');
/**
 * Resourceful controller for interacting with images
 */
class ImageController {
  async index({request}){
    const {piece_id}=request.all()
    const image= Image .query()
    .whereHas('piece', (builder) => {
      builder.where('piece_id', piece_id)
    })
    .fetch()

    return image
  }
  async store ({ params, request }) {
    const property = await Property.findOrFail(params.id)
  
    const images = request.file('image', {
      types: ['image'],
      size: '2mb'
    })
  
    await images.moveAll(Helpers.tmpPath('uploads'), file => ({
      name: `${Date.now()}-${file.clientName}`
    }))
  
    if (!images.movedAll()) {
      return images.errors()
    }
  
    await Promise.all(
      images
        .movedList()
        .map(image => property.images().create({ path: image.fileName }))
    )
  }

  async show ({ params, response }) {
    return response.download(Helpers.tmpPath(`uploads/${params.path}`))
    }
}

module.exports = ImageController