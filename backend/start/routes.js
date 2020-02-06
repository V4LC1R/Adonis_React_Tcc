'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.post('/users','UserController.create');
Route.post('/sessions','SessionController.create');

Route.post('/busca','BuscaController.index')

//imgs
Route.post('images','ImageController.index')
Route.post('images/new','ImageController.store').middleware('auth');
Route.get('images/:path', 'ImageController.show')

/*---- complete ----- */
Route.post('/aplication','AplicationController.index').middleware('auth');
Route.get('/aplication/:id','AplicationController.show').middleware('auth');
Route.post('/aplication/new','AplicationController.store').middleware('auth');
Route.put('/aplication/edit/:id','AplicationController.update').middleware('auth');
Route.delete('/aplication/delete/:id','AplicationController.destroy').middleware('auth');


// --- complete ---
Route.post('/pieces','PieceController.index').middleware('auth');
Route.post('/pieces/new', 'PieceController.store').middleware('auth');
Route.get('/pieces/:id','PieceController.show').middleware('auth');
Route.put('/pieces/edit/:id','PieceController.update').middleware('auth');
Route.delete('/piece/delete/:id','PieceController.destroy').middleware('auth')


// ---- complete ----
Route.post('/cars','CarController.index').middleware('auth');
Route.post('cars/new','CarController.store').middleware('auth');
Route.get('/car/:id','CarController.show').middleware('auth');
Route.put('/car/edit/:id','CarController.update').middleware('auth');
Route.delete('/car/delete/:id','Carcontroller.destroy').middleware('auth')


// ---- complete ----
Route.post('/brand','BrandController.index').middleware('auth');
Route.post('/brand/new','BrandController.store').middleware('auth');
Route.get('/brand/:id','BrandController.show').middleware('auth');
Route.put('/brand/edit/:id','BrandController.update').middleware('auth');
Route.delete('/brand/delete/:id','BrandController.destroy').middleware('auth');

//
Route.get('/teste/:class_id/:id','ClassController.index')
