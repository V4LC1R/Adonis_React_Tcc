'use strict'

const Database=use('Database');

class BuscaController {
    async index({request}){
        const {peca,marca,aplicacao,codigo}= request;

        const busca = await Database
                                .select('pieces.id','pieces.piece_name as piece','pieces.code','pieces.thumbnail','brands.brand_name as brand','cars.car_name as car')
                                .from('pieces')
                                .innerJoin('brands','pieces.brand_id','brands.id')
                                .innerJoin('aplications','pieces.id','aplications.piece_id')
                                .innerJoin('cars','aplications.car_id','cars.id');
          if (peca) {
            busca= where('pieces.piece_name',peca);
          }
          if (marca) {
            busca = where('brands.brands_name',marca)
          }
          if (aplicacao){
            busca=where('car.car_name',aplicacao)
          }
          if (codigo) {
              busca=where('piece.code',codigo)
          }
        return busca;
    }
}

module.exports = BuscaController
